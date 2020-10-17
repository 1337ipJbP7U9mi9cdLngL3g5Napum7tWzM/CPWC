
import { Controller } from "stimulus"
import copy from 'copy-to-clipboard';

export default class extends Controller {
  // static targets = [ "output" ]

  connect() {
      console.log('copyToClipboard')
  }

  copy(e) {
    copy(e.target.innerText,  {
      format: 'text/plain'
    });

    const copyModal = document.getElementsByClassName('copy-modal')[0]
    copyModal.classList.add('open')
    setTimeout(() => { copyModal.classList.remove('open') }, 3000);
  }

}
