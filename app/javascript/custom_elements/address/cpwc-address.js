import { LitElement, html } from 'lit-element';

class CpwcAddress extends LitElement {

  static get properties() {
    return {
      crypto_type: {type: String},
      address: {type: String},
      crypto_amount: {type: String},
      fiat_amount: {type: Number}
    }
  }

  render() {
    return html`
      <div class="address">
        <span class="address__address" @click=${this.openModal}>${this.address}</span>
        <span class="address__crypto">${this.crypto_amount}</span>
        <span class="address__crypto">${this.fiat_amount}</span>
        <span class="remove">Remove Me</span>
        <hr>
      </div>
    `;
  }

  openModal() {
    // modal open
    document.getElementsByClassName("modal")[0].style.display = "block";
    // qrcode info
    document.getElementsByTagName('qr-code')[0].setAttribute('data', this.address)
    // h5 holding the address
    document.querySelector('.modal-content h5').innerText = this.address
  }

  createRenderRoot() {
    return this;
  }

}

customElements.define('cpwc-address', CpwcAddress);
