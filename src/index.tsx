import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import route from '@/routes';
import * as serviceWorker from './serviceWorker';
import 'amfe-flexible';

import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter children={route} />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
