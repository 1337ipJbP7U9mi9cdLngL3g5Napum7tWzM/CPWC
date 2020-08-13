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

  // static get styles() {
  //   return {
  //
  //   }
  // }

  // constructor() {
  //   super();
  //   this.name = 'Hello World';
  // }

  render() {
    return html`
      <div>
        <span @click="${this.addressChange}">${this.address}</span>
        <span>${this.crypto_amount}</span>
        <span>${this.fiat_amount}</span>
        <button>Remove me</button>
      </div>
    `;
  }

  // addressChange() {
  //   let test_event = new CustomEvent('test-event', {
  //
  //     detail: {
  //       message: 'testing event'
  //     },
  //     bubbles: true,
  //     composed: true
  //   });
  //   this.dispatchEvent(test_event);
  // }

}

customElements.define('cpwc-address', CpwcAddress);
