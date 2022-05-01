import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

//PS: import 有 "{}" 是因為 export 時不是用export default
// redux start //
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
// redux end //

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
