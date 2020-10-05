import { Controller } from "stimulus"
// import { Html5QrcodeScanner, Html5Qrcode } from '../3rdparty/html5_qrcode.js';
// import QrScanner from 'qr-scanner';
// import QrScannerWorkerPath from '!!file-loader!../../../node_modules/qr-scanner/qr-scanner-worker.min.js';


export default class extends Controller {
  // static targets = [ "output" ]

  connect() {
    // console.log('im in qrreader')
    // console.log(Html5QrcodeScanner)
    // console.log(QrScannerLib.WORKER_PATH = QrScannerWorkerPath);
  }

  startQrCode() {
    // console.log('try to start qrcode')
    let html5QrcodeScanner = new Html5QrcodeScanner(
      "reader", { fps: 10, qrbox: 100 }, /* verbose= */ true);
    html5QrcodeScanner.render(this.onScanSuccess, this.onScanFailure);
  }

  onScanSuccess(qrMessage) {
  	// handle the scanned code as you like
  	console.log(`QR matched = ${qrMessage}`);
  }

  onScanFailure(error) {
  	// handle scan failure, usually better to ignore and keep scanning
  	// console.warn(`QR error = ${error}`);
  }

}
