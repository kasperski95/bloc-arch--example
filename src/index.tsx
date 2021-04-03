import React from 'react'
import ReactDOM from 'react-dom'
import { BlocProvider } from './blocs/setup-blocs'
import './index.css'
import { Home } from './screens/Home'

ReactDOM.render(
  <React.StrictMode>
    <BlocProvider>
      <Home />
    </BlocProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
