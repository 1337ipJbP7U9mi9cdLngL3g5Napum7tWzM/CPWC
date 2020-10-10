import { Controller } from "stimulus"

export default class extends Controller {
  // static targets = [ "output" ]

  connect() {
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
    // const stop = document.getElementById('reader__dashboard_section_csr').lastChild.lastChild
    // stop.click()
    this.html5QrcodeScanner.clear();
    console.log(`QR matched = ${qrMessage}`);
    const cpwc_addresses = document.getElementsByTagName('cpwc-addresses')[0]
    cpwc_addresses.addAddress(qrMessage)
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
