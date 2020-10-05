import { Controller } from "stimulus"

export default class extends Controller {
  connect() {
    console.log('im here')
  }

  openModal(e) {
    document.getElementsByClassName('camera-modal')[0].style.display = "block"
    const el = document.getElementById('reader')
    const qrReader = this.application.getControllerForElementAndIdentifier(el, 'qrcode-reader')
    console.log(qrReader)
    qrReader.startQrCode()
  }

  closeModal(e) {
    if(e.target.classList[0] !== "camera-modal-content") {
      this.element.style.display = "none"
    }
  }

}
