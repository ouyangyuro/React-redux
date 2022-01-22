import React from 'react';
import SongList from './SongList';

//PS: import 有 "{}" 是因為 export 時不是用export default
// redux start //
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import SongDetail from './SongDetail';
import reducers from '../reducers';
// redux end //

function App() {
  return (
    <Provider store={createStore(reducers)}>
      <>
        <SongDetail />
        <SongList />
      </>
    </Provider>
  );
}

export default App;
