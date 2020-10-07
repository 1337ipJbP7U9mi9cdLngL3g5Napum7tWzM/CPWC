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
    this.html5QrcodeScanner = ''
  }

  startQrCode() {
    // console.log('try to start qrcode')
    this.html5QrcodeScanner = new Html5QrcodeScanner(
      "reader", { fps: 10, qrbox: 300 }, /* verbose= */ true);
    this.html5QrcodeScanner.render(this.onScanSuccess, this.onScanFailure);
  }

  onScanSuccess(qrMessage) {
  	// handle the scanned code as you like
  	console.log(`QR matched = ${qrMessage}`);
    const cpwc_addresses = document.getElementsByTagName('cpwc-addresses')[0]
    cpwc_addresses.addAddress(qrMessage)
    document.getElementById('reader').innerHtml = ""
  }

  onScanFailure(error) {
  	// handle scan failure, usually better to ignore and keep scanning
  	// console.warn(`QR error = ${error}`);
  }

  stopQrCode() {
    console.log('in stop camera', Html5QrcodeScanner)
    console.log(this.html5QrcodeScanner)
    this.html5QrcodeScanner.stop().then(ignore => {
      console.log('stop?')
    }).catch(err => {
      console.log(err)
    })
  }

}
