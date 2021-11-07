import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import Web3 from 'web3'
import { Web3ReactProvider } from '@web3-react/core'
import { MetaMaskProvider } from './hooks/metamask'

import 'bootstrap/dist/css/bootstrap.min.css'

function getLibrary(provider, connector) {
  return new Web3(provider)
}

ReactDOM.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <MetaMaskProvider>
        <App />
      </MetaMaskProvider>
    </Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
