import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import persistDataLocally from './middleware/persist-data-locally';

let retrievedState;
try {
  retrievedState = localStorage.getItem('reduxStore');
  if (retrievedState === null){
    retrievedState = {};
  }
  retrievedState = JSON.parse(retrievedState);
} catch (err) {
  retrievedState = {};
}

const store = createStore(rootReducer, retrievedState, applyMiddleware(persistDataLocally));

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

document.body.style.margin = 0;

const render = (Component) => {
  const containerStyles = {
    margin: 'none'
  };
  ReactDOM.render(
    <AppContainer style={containerStyles}>
      <HashRouter>
        <Provider store={store}>
          <Component/>
        </Provider>
      </HashRouter>
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
