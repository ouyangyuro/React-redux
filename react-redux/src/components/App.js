import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//====== below components start ======//
import Navbar from './Navbar';
import SongList from './Song_pages/SongList';
import SongDetail from './Song_pages/SongDetail';
import PostList from './Blog_pages/PostList';
//====== below components end ======//

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path="/song">
            <SongDetail />
            <SongList />
          </Route>
          <Route exact path="/blog">
            <PostList />
          </Route>
          <Route exact path="/">
            <h1 className="text-white">Home</h1>
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
