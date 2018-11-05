import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';

document.body.style.margin = 0;

const render = (Component) => {
  const containerStyles = {
    margin: 'none'
  };
  ReactDOM.render(
    <AppContainer style={containerStyles}>
      <Component/>
    </AppContainer>,
    document.getElementById('react-app-root')
  );
};

render(App);

/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
/*eslint-enable */
