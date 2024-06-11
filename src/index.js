import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import 'core-js'

import App from './App'
import ReactPWAInstallProvider from 'react-pwa-install'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import store from './store'

createRoot(document.getElementById('root')).render(
  
    <Provider store={store}>
      <ReactPWAInstallProvider enableLogging>
      <App />
      </ReactPWAInstallProvider>
    </Provider>,
);

serviceWorkerRegistration.register();
