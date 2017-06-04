import React from 'react';
import { NavLink } from 'react-router-dom';

import headImg from '../assets/images/head.jpg';

const Nav = () => (
  <header className="header">
    <div className="header-img">
      <NavLink to="/">
        <img src={headImg} alt="" />
      </NavLink>
    </div>
    <nav>
      <NavLink className="item" to="/" activeClassName="active" exact>Demonstrate</NavLink>
      <NavLink className="item" to="/start" activeClassName="active">Start</NavLink>
      <a className="item" href="//github.com/IceEnd/ice-video">GitHub</a>
    </nav>
  </header>
);

Nav.displayName = 'PageNav';

export default Nav;
