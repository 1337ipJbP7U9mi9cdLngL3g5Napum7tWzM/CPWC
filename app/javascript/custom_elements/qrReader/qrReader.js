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
          <button class="btns" @click=${this.fileScanner}>Scan Image File</button>
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

  fileScanner() {
     console.log('hello world')
  }

  qrReaderSuccess(result) {
    console.log('decoded qr code:', result)

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
