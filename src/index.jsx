import React, { useEffect, useState } from 'react'
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import Protect from './components/PasswordProtect';
import App from './App';

import GlobalStyle from './themes/global-styles';
import store from './redux/store';

import './index.css';

const Render = () => {
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (process.env.REACT_APP_ENVIRONMENT === 'prod') {
      window.onbeforeunload = () => window.localStorage.clear();

      const sha512 = (str) => {
        return crypto.subtle.digest("SHA-512", new TextEncoder("utf-8").encode(str)).then(buf => {
          // eslint-disable-next-line prefer-template
          return Array.prototype.map.call(new Uint8Array(buf), x => (('00' + x.toString(16)).slice(-2))).join('');
        });
      }

      sha512(process.env.REACT_APP_PASSWORD_PROTECT).then(x => setPassword(x));
    }
  }, []);

  return (
    <React.StrictMode>
      <GlobalStyle />
      <Provider store={store}>
        {process.env.REACT_APP_ENVIRONMENT === 'prod' ?
          <Protect
            sha512={password}
            blur
            boxTitle="Global Consumer Index"
            inputPlaceholder="Enter the Password"
          >
            {password && <App />}
          </Protect>
          :
          <App />
        }
      </Provider>
    </React.StrictMode>
  )
};

ReactDOM.render(<Render />, document.getElementById('root'));
