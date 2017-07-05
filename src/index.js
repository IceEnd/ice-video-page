import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import Container from './container/Container';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
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
