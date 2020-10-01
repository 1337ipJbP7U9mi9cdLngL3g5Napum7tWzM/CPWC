import { Controller } from "stimulus"

export default class extends Controller {
  // static targets = [ "modal", "address" ]

  connect() {
    console.log('im here')
    // console.log(this)
  }

  closeModal(e) {
    if(e.target.classList[0] !== "modal-content") {
      this.element.style.display = "none"
    }
  }

}
