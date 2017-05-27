import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import headImg from '../assets/images/head.jpg';

export default class Container extends Component {
  static displayName = 'Nav';

  componentWillMount() {}

  render() {
    return (
      <header className="header">
        <div className="header-img">
          <img src={headImg} alt="" />
        </div>
        <nav>
          <Link to="/">首页</Link>
          <Link to="/start">开始</Link>
        </nav>
      </header>
    );
  }
}
