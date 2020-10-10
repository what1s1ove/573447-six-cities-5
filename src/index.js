import React from 'react';
import ReactDOM from 'react-dom';
import App from '~/components/app/app';
import {generateOffers, generateReviews} from '~/mocks/helpers/helpers';

const AppConfig = {
  OFFERS_COUNT: 4,
  REVIEWS_COUNT: 5,
};

const offers = generateOffers(AppConfig.OFFERS_COUNT);
const reviews = generateReviews(AppConfig.REVIEWS_COUNT);

ReactDOM.render(
    <App offers={offers} reviews={reviews} />,
    document.querySelector(`#root`)
);
