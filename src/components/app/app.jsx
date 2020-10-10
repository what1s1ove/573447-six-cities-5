import * as React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AppRoute} from '~/common/enums/enums';
import {offerType, reviewType} from '~/common/prop-types/prop-types';
import MainScreen from '../main-screen/main-screen';
import AuthScreen from '../auth-screen/auth-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import OfferScreen from '../offer-screen/offer-screen';

const App = ({offers, reviews}) => (
  <BrowserRouter>
    <Switch>
      <Route path={AppRoute.MAIN} exact>
        <MainScreen offers={offers} />
      </Route>
      <Route path={AppRoute.LOGIN} exact>
        <AuthScreen />
      </Route>
      <Route path={AppRoute.FAVORITES} exact>
        <FavoritesScreen offers={offers} />
      </Route>
      <Route path={AppRoute.OFFER_ID} exact>
        <OfferScreen offers={offers} reviews={reviews} />
      </Route>
    </Switch>
  </BrowserRouter>
);

App.propTypes = {
  offers: PropTypes.arrayOf(offerType).isRequired,
  reviews: PropTypes.arrayOf(reviewType).isRequired,
};

export default App;
