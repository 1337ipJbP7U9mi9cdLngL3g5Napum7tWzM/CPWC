import { Controller } from "stimulus"

export default class extends Controller {
  static target = [ "scanner" ]

  connect() {
    // console.log('im here')
  }

  openModal(e) {
    document.getElementsByClassName('camera-modal')[0].style.display = "block"
  }

  closeModal(e) {
    if(e.target.classList[0] === "camera-modal") {
      this.element.style.display = "none"
      document.getElementsByTagName('cpwc-qrreader')[0].stopScanner()
    }
  }

}
