import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from '~/store/store';
import {PlacesDataActionCreator, UserActionCreator} from '~/store/actions/actions';
import App from '~/components/app/app';

const init = () => {
  ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.querySelector(`#root`)
  );
};

Promise.all([
  store.dispatch(PlacesDataActionCreator.fetchOffers()),
  store.dispatch(UserActionCreator.checkAuth()),
]).then(() => init());
