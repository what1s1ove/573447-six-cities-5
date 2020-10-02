import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const AppConfig = {
  OFFERS_COUNT: 322,
};

ReactDOM.render(
    <App offersCount={AppConfig.OFFERS_COUNT} />,
    document.querySelector(`#root`)
);
