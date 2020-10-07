import { Controller } from "stimulus"
import walletAddressValidatorMinJs from '@swyftx/api-crypto-address-validator/dist/wallet-address-validator.min.js';


export default class extends Controller {
  static targets = [ "input" ]

  connect() {
  }

  inputCsv(evt) {
    this.inputTarget.click();
  }

  handleFiles(evt) {
  	// Check for the various File API support.
  	if (window.FileReader) {
  		// FileReader are supported.
  		this.getAsText(evt.target.files[0]);
  	} else {
  		alert('FileReader are not supported in this browser.');
  	}
  }

  getAsText(fileToRead) {
  	var reader = new FileReader();
  	// Handle errors load
  	reader.onload = (event) => {
      this.processData(event.target.result)
    }
  	reader.onerror = this.errorHandler;
  	// Read file into memory as UTF-8
    // console.log(reader.onload)
  	reader.readAsText(fileToRead);
  }

  processData(csv) {
      var allTextLines = csv.split(/\r\n|\n/);
      var lines = [];
      while (allTextLines.length) {
          lines.push(allTextLines.shift().split(','));
      }
  	this.drawOutput(lines);
  }

  errorHandler(evt) {
  	if(evt.target.error.name == "NotReadableError") {
  		alert("Cannot read file !");
  	}
  }

  validatePublicAddress(address_text){
    const cpwc_dropdowns = document.getElementsByTagName('cpwc-crypto-dropdowns')[0]
    const crypto = cpwc_dropdowns.returnCryptoObject();

    return walletAddressValidatorMinJs.validate(address_text, crypto.sym);
  }

  drawOutput(lines){
  	for (var i = 0; i < lines.length; i++) {
      	for (var j = 0; j < lines[i].length; j++) {
      		var address_text_to_check = lines[i][j].replace(/['"]+/g, '');
      		var valid = this.validatePublicAddress(address_text_to_check.trim());
      		if (valid){
            this.addAddress(address_text_to_check)
          }
  		}
  	}
  }

  addAddress(address) {
    const cpwc_addresses = document.getElementsByTagName('cpwc-addresses')[0]
    // let addresses = cpwc_addresses.addresses
    //
    // addresses.push({address: address})
    // cpwc_addresses.addresses = addresses
    // cpwc_addresses.update()
    cpwc_addresses.addAddress(address)
  }

}
