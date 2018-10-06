const Web3 = require('web3')

let web3

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  web3 = new Web3(window.web3.currentProvider)
} else {

  window.addEventListener('message', ({ data }) => {
    if (data && data.type && data.type === 'ETHEREUM_PROVIDER_SUCCESS') {
        // Use injected provider, start dapp...
        web3 = new Web3(ethereum);
    }
  });
  // Request provider
  window.postMessage({ type: 'ETHEREUM_PROVIDER_REQUEST' }, '*');
  //web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
}

module.exports = web3


