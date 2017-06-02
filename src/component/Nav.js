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
      <NavLink className="item" to="//github.com/IceEnd/ice-video">GitHub</NavLink>
    </nav>
  </header>
);

Nav.displayName = 'PageNav';

export default Nav;
