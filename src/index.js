import React from 'react';
import ReactDOM from 'react-dom';
import App from '~/components/app/app';
import {generateOffers} from '~/mocks/helpers/helpers';

const AppConfig = {
  OFFERS_COUNT: 4,
};

const offers = generateOffers(AppConfig.OFFERS_COUNT);

console.log(offers);

ReactDOM.render(
    <App offersCount={AppConfig.OFFERS_COUNT} />,
    document.querySelector(`#root`)
);
