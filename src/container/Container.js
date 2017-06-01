import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from '../component/Nav';
import Home from '../component/Home';
import Start from '../component/Start';

import '../assets/main.scss';
import '../assets/video.scss';

export default class Container extends Component {
  static displayName = 'Container';

  componentWillMount() {}

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Route exact path="/" component={Home} />
          <Route path="/start" component={Start} />
        </div>
      </Router>
    );
  }
}
