function appendItemToList (key, value, list) {
  let valueElement = document.createElement('div');
  let keyElement = document.createElement('div');
  keyElement.appendChild(document.createTextNode(key));
  keyElement.className += 'key';
  valueElement.appendChild(document.createTextNode(value));
  list.appendChild(keyElement);
  list.appendChild(valueElement);
}

function populateCertificate (certificateData) {
  if (certificateData) {
    content = document.querySelector('#certificateDetails')
    content.innerHTML = ''

    appendItemToList('Common name:', certificateData.commonName, content)
    appendItemToList('Organization:', certificateData.organization, content)
    appendItemToList('Issuer:', certificateData.issuer, content)
    appendItemToList('Serial Number:', certificateData.serialNumber, content)
    appendItemToList('Valid From:', certificateData.validFrom, content)
    appendItemToList('Valid To:', certificateData.validTo, content)
    appendItemToList('SHA1 Lowercase:', certificateData.sha1fingerprintl, content)
    appendItemToList('SHA1 Uppercase:', certificateData.sha1fingerprintu, content)
    appendItemToList('SHA256 Lowercase:', certificateData.sha256fingerprintl, content)
    appendItemToList('SHA256 Uppercase:', certificateData.sha256fingerprintu, content)
  }
}

function init () {
  return new Promise(function (resolve, reject) {
    chrome.runtime.sendMessage({
      type: 'REQUEST_CERTIFICATE'
    }, function (response) {
      populateCertificate(response)
      resolve(response)
    })
  })
}

if (typeof global !== 'undefined') {
  global.init = init
} else {
  init()
}
