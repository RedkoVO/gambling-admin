import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'

import App from './containers/App'

import registerServiceWorker from './registerServiceWorker'

import 'react-virtualized-select/styles.css'
import 'react-datepicker/dist/react-datepicker.css'
import './styles/reactSelect.css'
import './index.css'

const initApp = () => {
  const history = createBrowserHistory()

  ReactDOM.render(<App history={history} />, document.getElementById('root'))
  registerServiceWorker()
}

initApp()
