import { LitElement, html } from 'lit-element';
import walletAddressValidatorMinJs from '@swyftx/api-crypto-address-validator/dist/wallet-address-validator.min.js';

class CpwcAddresses extends LitElement {

  static get properties() {
    return {
      addresses: {type: Array},
      checkedBalanceState: {type: String}
    }
  }

  constructor() {
    super();
    this.addresses = [];
    this.checkedBalanceState = "false";
  }

  totalsOnChecked() {
    let totalTemplate = ''
    this.checkedBalanceState === "true" ?
      totalTemplate = html `
        <div class="address-totals">
          <div class="address-totals__center">
            <span class="tea_color">Addresses:</span>
            <span>${this.totalAddresses()}</span>
          </div>
          <div class="address-totals__center">
            <span class="tea_color">Crypto Amount:</span>
            <span>${this.totalCryptoAmount()}</span>
          </div>
          <div class="address-totals__center">
            <span class="tea_color">Fiat Amount:</span>
            <span>${this.totalFiatAmount()}</span>
          </div>
          <span class="remove" @click=${this.removeAllAddresses}>Remove All</span>
          <hr>
        </div>
      `
      :
      totalTemplate = html `
        <div class="address-totals">
          <div class="address-totals__center">
            <span class="tea_color">Addresses:</span>
            <span>${this.totalAddresses()}</span>
          </div>
          <span class="tea_color">Crypto Amount: </span>
          <span class="tea_color">Fiat Amount: </span>
          <span class="remove" @click=${this.removeAllAddresses}>Remove All</span>
          <hr>
        </div>
      `
    return totalTemplate
  }

  checkedAddress(address) {
    if(address.crypto_amount !== undefined) {
      return html`
        <cpwc-address
          address=${address.address}
          crypto_amount=${address.crypto_amount}
          fiat_amount=${address.fiat_amount}>
        </cpwc-address>
      `
    } else {
      return html`
        <cpwc-address address=${address.address}>
        </cpwc-address>
      `
    }
  }

  render() {
    return html`
      <div @keyup=${this.onEnter} data-controller="api" class="input-addresses">
        <span class="check-address">
          <button class="btns" type="button" name="check" data-action="click->api#submitAddress"
            class="check-address">
            Check Address
          </button>
        </span>
        <input
          type="text"
          id="input-address"
          plaveholder="Please input Public Address"></input>
        <span class="camera" data-controller="cameramodal"><button class="btns" data-action="click->cameramodal#openModal"><i class="fas fa-qrcode"></i></button></span>
        <span class="enter-address">
          <button class="btns" @click=${this.submitAddress} type="button" name="enter">Enter Address</button>
        </span>
      </div>
      <div id="addresses">
        ${this.totalsOnChecked()}
        ${this.addresses.map(address =>
          this.checkedAddress(address)
        )}
      </div>
    `;
  }

  totalAddresses() {
    const numberOfAddresses = this.addresses.length
    return numberOfAddresses
  }

  totalCryptoAmount() {
    let cryptoTotal = 0
    this.addresses.map((address) => {
      address.crypto_amount !== undefined ?
        cryptoTotal += parseFloat(address.crypto_amount)
        :
        cryptoTotal += 0
    })

    return cryptoTotal
  }

  totalFiatAmount() {
    let fiatAmount = 0
    this.addresses.map((address) => {
      isNaN(address.fiat_amount)  ?
        fiatAmount += 0
        :
        fiatAmount += parseFloat(address.fiat_amount)
    })

    return fiatAmount.toFixed(2)
  }

  removeAllAddresses() {
    this.addresses = []
  }

  // Button click to add Address
  submitAddress() {
    const address = document.getElementById('input-address');
    this.addAddress(address.value.trim());
  }

  // Enter key to add address
  onEnter(e) {
    if(e.key === 'Enter') {
      const address = document.getElementById('input-address');
      this.addAddress(address.value.trim());
    }
  }

  addAddress(address) {
    address = address.trim()
    const valid = this.checkValidAddress(address)
    if(valid) {
      this.addresses = [... this.addresses, {address: address}];
      document.getElementById('input-address').value = '';
    }
  }

  checkValidAddress(address) {
    address = address;
    const cpwc_dropdowns = document.getElementsByTagName('cpwc-crypto-dropdowns')[0]
    const crypto = cpwc_dropdowns.returnCryptoObject();

    if(address !== '' && walletAddressValidatorMinJs.validate(`${address}`, crypto.sym)) {
      const stateAddressesArray = this.addresses;
      const addressesArray = (stateAddressesArray.map(a => a.address));
      if(addressesArray.includes(address)) {
        alert('You have entered a duplicate address');
        return false;
      }
      return true;
    } else {
      alert('Please enter a valid address');
      return false;
    }
  }

  changeAddressesAmount(cryptoAmounts) {
    const addressesArray = this.addresses.map(a => a.address)
    const cpwc_dropdowns = document.getElementsByTagName('cpwc-crypto-dropdowns')[0]

    let i;
    for (i = 0; i < addressesArray.length; i++) {
      const addressBalance = parseFloat(cryptoAmounts[addressesArray[i]]);
      const updateAddress = addressesArray[i];
      const index = this.addresses.findIndex(x => x.address === updateAddress);
      const addressAttributes = {
        crypto_amount: addressBalance.toString(),
        fiat_amount: addressBalance * cpwc_dropdowns.currentCurrenciesPrice[cpwc_dropdowns.currentCurrency]
      };
      this.addresses = [
        ...this.addresses.slice(0, index),
        Object.assign({}, this.addresses[index], addressAttributes),
        ...this.addresses.slice(index + 1)
      ]
    }
  }

  changeAddressesCurrencyAmount(currency) {
    if(this.checkedBalanceState !== "true") {
      return 0;
    }

    /// Maybe to fixed for certain currencies like fiat ones?
    const addresses = this.addresses
    const newAddresses = []
    addresses.map((address) => {
      address.fiat_amount = parseFloat(address.crypto_amount) * currency
      newAddresses.push(address)
    })
    this.addresses = newAddresses
  }

  createRenderRoot() {
    return this;
  }

}

customElements.define('cpwc-addresses', CpwcAddresses);
