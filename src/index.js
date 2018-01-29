import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Routers from './router/';

import { Router,  browserHistory} from 'react-router'

let routes = Routers

ReactDOM.render(<Router routes={routes} history={browserHistory}></Router>, document.getElementById('root'));
registerServiceWorker();
