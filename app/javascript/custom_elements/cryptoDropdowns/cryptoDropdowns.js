import { LitElement, html } from 'lit-element';
import '@material/mwc-select';
import '@material/mwc-list/mwc-list-item';

class CpwcCryptoDropdowns extends LitElement {

  static get properties() {
    return {
      cryptoIds: {type: Array},
      currentCurrenciesPrice: {type: Object},
      currentCurrency: {type: String},
      currenciesArray: {type: Array},
      donationAddresses: {type: Object}
    }
  }

  constructor() {
    super();
    this.cryptoIds = [
      { name: "Bitcoin", sym: "btc", cryptoId: 1},
      { name: "Ethereum", sym: "eth", cryptoId: 1027},
      //{ name: "Ripple", sym: "xrp", cryptoId: 52},
      { name: "Bitcoin-Cash", sym: "bch", cryptoId: 1831},
      { name: "Litecoin", sym: "ltc", cryptoId: 2},
      // { name: "Peercoin", sym: "ppc", cryptoId: 5},
      { name: "Dogecoin", sym: "doge", cryptoId: 74},
      // { name: "Namecoin", sym: "nmc", cryptoId: 3},
      // { name: "EthereumClassic", sym: "etc", cryptoId: 1321},
      // { name: "Vertcoin", sym: "vtc", cryptoId: 99},
      { name: "Dash", sym: "dash", cryptoId: 131},
      // { name: "BitcoinGold", sym: "btg", cryptoId: 2083},
      // { name: "Neo", sym: "neo", cryptoId: 1376},
      // { name: "NeoGas", sym: "gas", cryptoId: 1785},
      // { name: "Qtum", sym: "qtum", cryptoId: 1684},
      // { name: "Komodo", sym: "kmd", cryptoId: 1521},
      // { name: "Bitcoinz", sym: "btcz", cryptoId: 2041},
      //{ name: "BitcoinPrivate", sym: "btcp", cryptoId: 2571},
      // { name: "Zencash", sym: "zen", cryptoId: 1698},
      { name: "Zcash", sym: "zec", cryptoId: 1437},
      // { name: "ZClassic", sym: "zcl", cryptoId: 1447},
      // { name: "Decred", sym: "dcr", cryptoId: 1168},
      // { name: "Digibyte", sym: "dgb", cryptoId: 109}
    ];
    this.currentCurrenciesPrice = {};
    this.currentCurrency = 'usd';
    this.currenciesArray = [
      "aed", "ars", "aud", "bch", "bdt", "bhd", "bmd", "bnb", "brl",
      "btc", "cad", "chf", "clp", "cny", "czk", "dkk", "eos", "eth", "eur",
      "gbp", "hkd", "huf", "idr", "ils", "inr", "jpy", "krw", "kwd", "lkr",
      "ltc", "mmk", "mxn", "myr", "nok", "nzd", "php", "pkr", "pln", "rub",
      "sar", "sek", "sgd", "thb", "try", "twd", "uah", "usd", "vef", "vnd",
      "xag", "xau", "xdr", "xlm", "xrp", "zar"
    ];
    this.donationAddresses = {
      btc: "1337ipJbP7U9mi9cdLngL3g5Napum7tWzM",
      eth: "0x94483b123b422d2Ab61fC459118667513956144E",
      bch: "1GDLQvcZY8TS56gf6X8Hm94B8wRkbtV438",
      ltc: "LWcXUB6ny88tK49TK1V6KprE5oDcJ1zJhx",
      ppc: "PMWKyz4Sr8nKZnjABsWKnxJHCnjKo4garm",
      doge: "DND5TbT834xsjBre1c6pREJYWMDWKAL1rc",
      nmc: "NKX2XRAnucmc8RBTV9oZo8kgx7NP6K52JV",
      etc: "Ethereum Classic Paper Wallet Checker!",
      vtc: "VhuhgKpVwgqyuNCsJpEjcWxxKyP9rm9Aod",
      dash: "XckPoTubxQ8PbY9VAYCnSZarpsq6BFNUHA",
      btg: "GMbBJi6x6osdKnCnQUZqUWgD3fGztzik1h",
      neo: "Neo Cryptocurrency Checker!",
      gas: "Neo Gas Cryptocurrency Checker!",
      qtum: "Qtum Cryptocurrency Checker!",
      kmd: "Komodo Cryptocurrency Checker!",
      btcz: "Bitcoinz Cryptocurrency Checker!",
      zen: "Zen Cryptocurrency Checker!",
      zec: "t1d29PNHtTJHHE4jMeLJFrmRcHJNhyYxZZC",
      zcl: "ZClassic Cryptocurrency Checker!",
      dcr: "Decred Cryptocurrency Checker!",
      dgb: "DKkftwDYUQpMZCcDmcgtbLnCk5sf1qV9Hi"
    }
  }

  cryptoDropdown() {
    let dropdownItems = [];
    let j = 0;
    for(const i of this.cryptoIds) {
      j === 0 ?
        dropdownItems.push(html `<mwc-list-item value="${j}" selected>${i.name}</mwc-list-item>`)
        :
        dropdownItems.push(html `<mwc-list-item value="${j}">${i.name}</mwc-list-item>`)
      j++
    }
    return dropdownItems
  }

  currencyDropdown() {
    let dropdownItems = [];
    const currenciesArray = this.currenciesArray
    let j = 0;
    for(const i of currenciesArray) {
      i === "usd" ?
        dropdownItems.push(html `<mwc-list-item value="${j}" selected>${i.toUpperCase()}</mwc-list-item>`)
        :
        dropdownItems.push(html `<mwc-list-item value="${j}">${i.toUpperCase()}</mwc-list-item>`)
      j++
    }
    return dropdownItems
  }

  currentRate() {
    if(this.currentCurrenciesPrice["usd"]) {
      return html`
        <div class="current_rate">
          <span>1</span>
          <span>=</span>
          <span>${this.currentCurrenciesPrice[this.currentCurrency]}</span>
        </div>
      `
    } else {
      return null
    }
  }

  render() {
    return html`
      <div class="crypto-dropdowns">
        <mwc-select outlined label="Crypto" id="crypto"
          @action=${this.donationAddress}>
          ${this.cryptoDropdown()}
        </mwc-select>
        <mwc-select outlined label="Currency" id="currency"
          @action=${this.currencySelected}>
          ${this.currencyDropdown()}
        </mwc-select>
      <!-- <div>Value: <span id="preselectedValue"></span></div> -->
        ${this.currentRate()}
      </div>
    `
  }

  currencySelected(evt) {
    const cpwc_addresses = document.getElementsByTagName('cpwc-addresses')[0]
    const selectedText = evt.target.selectedText.toLowerCase()
    this.currentCurrency = selectedText
    cpwc_addresses.changeAddressesCurrencyAmount(this.currentCurrenciesPrice[selectedText])
    cpwc_addresses.fiat = selectedText.toUpperCase()
    cpwc_addresses.update()
  }

  donationAddress() {
    document.getElementsByTagName('cpwc-addresses')[0].removeAllAddresses()
    const cryptoObject = this.returnCryptoObject()
    const address = this.donationAddresses[cryptoObject.sym]
    const cryptoName = cryptoObject.name
    document.querySelector('#app__donation span').innerText = `Donations for ${cryptoName} Appreciated!`
    document.querySelector('#app__donation .app__donation').innerText = address
  }

  returnCryptoObject() {
    const cryptoId = document.getElementById('crypto').value
    return this.cryptoIds[cryptoId]
  }

  createRenderRoot() {
    return this;
  }

}

customElements.define('cpwc-crypto-dropdowns', CpwcCryptoDropdowns);
