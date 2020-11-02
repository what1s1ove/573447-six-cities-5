import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from '~/store/store';
import {PlacesDataActionCreator} from '~/store/actions/actions';
import {AppConfig} from '~/common/enums/enums';
import {generateReviews} from '~/mocks/helpers/helpers';
import App from '~/components/app/app';

const reviews = generateReviews(AppConfig.REVIEWS_COUNT);

const init = () => {
  ReactDOM.render(
      <Provider store={store}>
        <App reviews={reviews} />
      </Provider>,
      document.querySelector(`#root`)
  );
};

Promise.all([store.dispatch(PlacesDataActionCreator.fetchOffers())]).then(() => init());
