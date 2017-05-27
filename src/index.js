import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Container from './container/Container';

const render = () => {
  ReactDOM.render(
    <Container />,
    document.querySelector('#root')
  );
};

render(Container);

if(module.hot) {
  module.hot.accept('./container/Container', () => {
    const newApp = require('./container/Container').default;
    render(newApp);
  });
}
