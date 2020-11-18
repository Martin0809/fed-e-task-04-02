import React from 'react'
import ReactDOM from 'react-dom'
import { StoreProvider } from './stores'

import './index.less'
import App from './pages/app'

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById('root')
)
