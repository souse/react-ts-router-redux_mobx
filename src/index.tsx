import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
// import { Provider } from 'mobx-react'


import * as serviceWorker from './serviceWorker'
import 'amfe-flexible'

// import mcountStore from '@/mobx/mcount';

import store, { history } from './redux/store';
import route from './routes';
import './index.scss'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter children={route}></BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <ConnectedRouter history={history}>
//         <BrowserRouter children={route} />
//       </ConnectedRouter>
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// )
// ReactDOM.render(
//   <React.StrictMode>
//     <Provider countStore={mcountStore}>
//       <BrowserRouter children={route} />
//     </Provider>  
//   </React.StrictMode>,
//   document.getElementById('root')
// )

serviceWorker.unregister()
