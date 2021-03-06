import { LitElement, html } from 'lit-element';
import QrScanner from "qr-scanner"
import QrScannerWorkerPath from '!!file-loader!../../../../node_modules/qr-scanner/qr-scanner-worker.min.js';

class CpwcQrReader extends LitElement { 
  static get properties() { 
    return { open: {type: Boolean},
      qrScanner: {type: Object},
      result: {type: String}
    }
  }

  constructor() {
    super()
  }

  firstUpdated() {
    QrScanner.WORKER_PATH = QrScannerWorkerPath
    this.qrScanner = new QrScanner(
      this.getElementsByTagName('video')[0],
      result => this.qrReaderSuccess(result),
      error => console.log(error)
    )
  }

  render() {
    return html`
      <div class="qr__scanner">
        <div class="qr_buttons">
          <button class="btns" @click=${this.startScanner}>Scan Qrcode with Camera</button>
          <button class="btns" @click=${this.imageInput}>
            Scan Image File 
            <input class="hidden" @change=${this.fileScanner} type="file" id="file-scanner" accept="image/*"></input>
          </button>
        </div>
        <div id="qr__scanner">
          <video @playing=${this.areaScanner} @pause=${this.areaScanner}></video>
        </div>
        <div class="qr__scanner_success">
          <span>Successfully Added:<br/>${this.result}</span>
        </div>
      </div>
    `
  }

  startScanner() {
    this.qrScanner.start()
  }

  stopScanner() {
    this.qrScanner.stop()
  }

  imageInput(evt) {
    document.getElementById("file-scanner").click()
  }

  fileScanner(evt) {
    if (window.FileReader) {
      const modal = document.getElementsByClassName('camera-modal')[0] 
      QrScanner.scanImage(document.getElementById("file-scanner").files[0])
        .then(result => {
          document.getElementsByTagName('cpwc-addresses')[0].addAddress(result)
          modal.style.display = "none"
        })
        .catch(error => console.log(error || 'No QR code found.'));
        
    } else {
      alert('FileReader is not supported in the browser')
    }
  }

  qrReaderSuccess(result) {
    // console.log('decoded qr code:', result)

    const cpwc_addresses = document.getElementsByTagName('cpwc-addresses')[0]
    if(cpwc_addresses.addAddress(result)) {
      this.result = result
      const success = this.querySelector('.qr__scanner_success')
      success.classList.add('open')
      setTimeout(() => { success.classList.remove('open') }, 3000);
    }
    this.stopScanner()
  }

  areaScanner() {
    this.querySelector('#qr__scanner').classList.toggle('open')
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define('cpwc-qrreader', CpwcQrReader);
