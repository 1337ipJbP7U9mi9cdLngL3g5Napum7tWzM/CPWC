
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

    document.getElementsByClassName('copy-modal')[0].classList.add('open')
    setTimeout(() => { document.getElementsByClassName('copy-modal')[0].classList.remove('open') }, 3000);
  }
}
