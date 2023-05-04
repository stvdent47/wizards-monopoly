import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'core/App';
import { Provider } from 'react-redux';
import { store } from 'app/store';

ReactDOM.createRoot(document.querySelector('#root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);