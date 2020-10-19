import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from '~/store/store';
import App from '~/components/app/app';
import {generateOffers, generateReviews} from '~/mocks/helpers/helpers';

const AppConfig = {
  OFFERS_COUNT: 4,
  REVIEWS_COUNT: 5,
};

const offers = generateOffers(AppConfig.OFFERS_COUNT);
const reviews = generateReviews(AppConfig.REVIEWS_COUNT);

ReactDOM.render(
    <Provider store={store}>
      <App offers={offers} reviews={reviews} />
    </Provider>,
    document.querySelector(`#root`)
);
