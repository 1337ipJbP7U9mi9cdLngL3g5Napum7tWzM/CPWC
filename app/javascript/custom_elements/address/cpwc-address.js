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
        <span class="address__address">${this.address}</span>
        <span class="address__crypto">${this.crypto_amount}</span>
        <span class="address__crypto">${this.fiat_amount}</span>
        <span>Remove</span>
        <hr>
      </div>
    `;
  }

  createRenderRoot() {
    return this;
  }

}

customElements.define('cpwc-address', CpwcAddress);
