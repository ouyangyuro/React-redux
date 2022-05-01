import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

//PS: import 有 "{}" 是因為 export 時不是用export default
// redux start //
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk'; //打api非同步,需要用此處理
// redux end //

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
