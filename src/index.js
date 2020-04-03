import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, HashRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import {ModalState} from "./components/Context/modalContext/ModalState";
import {PreloaderState} from './components/Context/preloaderContext/PreloaderState';

const application = (
    <HashRouter>
      <PreloaderState>
        <ModalState>
          <App/>
        </ModalState>
      </PreloaderState>
    </HashRouter>
);
ReactDOM.render(application, document.getElementById('root'));
serviceWorker.unregister();
