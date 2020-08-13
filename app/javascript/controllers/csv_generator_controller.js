import { Controller } from "stimulus"
import { saveAs } from 'file-saver';
// import { blob } from 'blob'


export default class extends Controller {
  // static targets = [ "output" ]

  connect() {
    console.log('im here')
  }

  createCsv(event) {
    event.preventDefault()
    const cpwc_addresses = document.getElementsByTagName('cpwc-addresses')[0]
    const cpwc_dropdowns = document.getElementsByTagName('cpwc-dropdowns')[0]
    const FileSaver = require('file-saver');
    const rowDelim = '"\r\n"'
    let csv = ""
    const cryptoName = document.getElementById('crypto').selectedText
    const fiatName = document.getElementById('currency').selectedText
    const totalAddresses = cpwc_addresses.totalAddresses()
    const totalCrypto = cpwc_addresses.totalCryptoAmount()
    const totalFiat = parseFloat(cpwc_addresses.totalFiatAmount())



    csv = `Addresses: ${totalAddresses}, ${cryptoName}: ${totalCrypto},${fiatName}: ${totalFiat}`

    cpwc_addresses.addresses.map((row) => {
      csv += ` \r\n ${row.address}, ${row.crypto_amount}, ${row.fiat_amount}`
    })

    var blob = new Blob([csv], {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(blob, "bye.csv");
  }

}
