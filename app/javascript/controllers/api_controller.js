import { Controller } from "stimulus"
import {allApis} from '../apis/allApis.js';

export default class extends Controller {
  // static targets = [ "output" ]

  connect() {
  }

  submitAddress(event) {
    const cpwc_addresses = document.getElementsByTagName('cpwc-addresses')[0]
    const addressesArray = cpwc_addresses.addresses.map(a => a.address)
    cpwc_addresses.checkedBalanceState = false 

    const cpwc_dropdowns = document.getElementsByTagName('cpwc-crypto-dropdowns')[0]
    const crypto = cpwc_dropdowns.returnCryptoObject();

    const balancePromises = allApis(addressesArray, crypto.name, crypto.sym, cpwc_dropdowns.currentCurrency);
    Promise.all(balancePromises).then((result) => {
      cpwc_dropdowns.currentCurrenciesPrice = result[0]
      cpwc_addresses.changeAddressesAmount(result[1])
    }).catch((error) => {
      console.log(error)
    }).then(() => {
      cpwc_addresses.checkedBalanceState = true
    })

  }
}
