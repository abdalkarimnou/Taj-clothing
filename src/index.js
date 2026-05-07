import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // React.StrictMode helps highlight potential problems in an application
  // during development (it activates extra checks and warnings).
  <React.StrictMode>
    {/* Provider makes the Redux store available to the app */}
    <Provider store={store}>
      {/* BrowserRouter enables client-side routing for Route/Link/Switch */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);