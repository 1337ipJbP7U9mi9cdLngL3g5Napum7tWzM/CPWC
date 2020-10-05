import { Controller } from "stimulus"

export default class extends Controller {

  connect() {
  }

  closeModal(e) {
    if(e.target.classList[0] !== "modal-content") {
      this.element.style.display = "none"
    }
  }

}
