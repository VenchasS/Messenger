import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import { Provider } from 'react-redux';



let ReRender = (state) => {

    ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)};



export default ReRender;

ReRender(store.getState());
store.subscribe(() => {
    ReRender(store.getState());
});

serviceWorker.unregister();
