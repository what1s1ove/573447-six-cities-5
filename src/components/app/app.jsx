import * as React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AppRoute} from '~/common/enums/enums';
import {offerType, reviewType} from '~/common/prop-types/prop-types';
import withActiveOffer from '~/hocs/with-active-offer/with-active-offer';
import MainScreen from '~/components/main-screen/main-screen';
import AuthScreen from '~/components/auth-screen/auth-screen';
import FavoritesScreen from '~/components/favorites-screen/favorites-screen';
import OfferScreen from '~/components/offer-screen/offer-screen';

const WrappedMainScreen = withActiveOffer(MainScreen);
const WrappedOfferScreen = withActiveOffer(OfferScreen);

const App = ({offers, reviews}) => (
  <BrowserRouter>
    <Switch>
      <Route path={AppRoute.MAIN} exact>
        <WrappedMainScreen offers={offers} />
      </Route>
      <Route path={AppRoute.LOGIN} exact>
        <AuthScreen />
      </Route>
      <Route path={AppRoute.FAVORITES} exact>
        <FavoritesScreen offers={offers} />
      </Route>
      <Route path={AppRoute.OFFER_ID} exact>
        <WrappedOfferScreen offers={offers} reviews={reviews} />
      </Route>
    </Switch>
  </BrowserRouter>
);

App.propTypes = {
  offers: PropTypes.arrayOf(offerType.isRequired).isRequired,
  reviews: PropTypes.arrayOf(reviewType.isRequired).isRequired,
};

export default App;
