import { Controller } from "stimulus"
import QrScanner from "qr-scanner"
import QrScannerWorkerPath from '!!file-loader!../../../node_modules/qr-scanner/qr-scanner-worker.min.js';

export default class extends Controller {
  static targets = [ "video" ]

  connect() {
    // console.log(QrScannerWorkerPath)
    // this.html5QrcodeScanner = '
    // console.log(QrScanner)
    this.qrScanner = ''
  }

  initialize() {
    this.startQrCode()
  }

  startQrCode() {
    QrScanner.WORKER_PATH = QrScannerWorkerPath;
    this.qrScanner = new QrScanner(
      this.videoTarget,
      result => this.qrReaderSuccess(result),
      error => console.log(error)
    );
    console.log(this.qrScanner)
    this.qrScanner.start();
    this.canvas(this.qrScanner)
  }

  qrReaderSuccess(result) {
    console.log('decoded qr code:', result)
    const cpwc_addresses = document.getElementsByTagName('cpwc-addresses')[0]
    cpwc_addresses.addAddress(qrMessage)

  }

  canvas(qr) {
    console.log(qr)
    document.getElementById('show-scan-region').addEventListener('change', (e) => {
      const input = e.target;
      const label = input.parentNode;
      label.parentNode.insertBefore(qr.$canvas, label.nextSibling);
      scanner.$canvas.style.display = input.checked ? 'block' : 'none';
    });
  }



  // startQrCode() {
  //   // console.log('try to start qrcode')
  //   this.html5QrcodeScanner = new Html5QrcodeScanner(
  //     "reader", { fps: 10, qrbox: 300, aspectRatio: 1.777778 }, /* verbose= */ true);
  //   this.html5QrcodeScanner.render(this.onScanSuccess, this.onScanFailure);
  //   document.getElementById('reader__dashboard_section_swaplink').setAttribute('href', 'javascript:void(0)')
  // }
  //
  // onScanSuccess(qrMessage) {
  // 	// handle the scanned code as you like
  //   // const stop = document.getElementById('reader__dashboard_section_csr').lastChild.lastChild
  //   // stop.click()
  //   // this.html5QrcodeScanner.clear();
  //   console.log(`QR matched = ${qrMessage}`);
  //   const cpwc_addresses = document.getElementsByTagName('cpwc-addresses')[0]
  //   cpwc_addresses.addAddress(qrMessage)
  // }
  //
  // onScanFailure(error) {
  // 	// handle scan failure, usually better to ignore and keep scanning
  // 	// console.warn(`QR error = ${error}`);
  // }

}
