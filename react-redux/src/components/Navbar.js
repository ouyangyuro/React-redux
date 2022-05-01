import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import '../styles/Navbar.scss'; //header nav 樣式

function Navbar() {
  return (
    <>
      <header className="header bg-blue-100 sticky top-0 z-50">
        {/* <!-- =========nav star========= --> */}
        <nav className="nav">
          <ul className="list-unstyled flex justify-center">
            <li className="li_width">
              <Link className="nav-font inline-block" to="/">
                home
              </Link>
            </li>
            <li className="li_width">
              <Link className="nav-font inline-block" to="/song">
                song
              </Link>
            </li>
            <li className="li_width">
              <Link className="nav-font inline-block" to="/blog">
                blog
              </Link>
            </li>
            <li className="li_width">
              <Link className="nav-font inline-block" to="/">
                tutorials
              </Link>
            </li>
          </ul>
        </nav>
        {/* <!-- =========nav end========= --> */}
      </header>
    </>
  );
}

export default withRouter(Navbar);
