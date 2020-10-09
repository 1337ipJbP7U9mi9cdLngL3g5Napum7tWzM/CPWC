import { Controller } from "stimulus"
import { saveAs } from 'file-saver';

export default class extends Controller {
  // static targets = [ "output" ]

  connect() {
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
    const csvNameInput = document.getElementById('csv_generator_input')

    console.log(csvNameInput)

    let csvName = ''
    if(csvNameInput.value !== '') {
      console.log('hi 1')
      csvName = csvNameInput.value + '.csv'
    } else {
      console.log('hi 2')
      csvName = 'CryptocurrenciesChecker.csv'
    }

    console.log(csvName)

    csv = `Addresses: ${totalAddresses}, ${cryptoName}: ${totalCrypto},${fiatName}: ${totalFiat}`

    cpwc_addresses.addresses.map((row) => {
      csv += `\r\n${row.address}, ${row.crypto_amount}, ${row.fiat_amount}`
    })

    var blob = new Blob([csv], {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(blob, csvName);
  }

}
