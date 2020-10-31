import * as React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AppRoute} from '~/common/enums/enums';
import {reviewType} from '~/common/prop-types/prop-types';
import withActiveItem from '~/hocs/with-active-item/with-active-item';
import withFormEditing from '~/hocs/with-form-editing/with-form-editing';
import MainScreen from '~/components/main-screen/main-screen';
import AuthScreen from '~/components/auth-screen/auth-screen';
import FavoritesScreen from '~/components/favorites-screen/favorites-screen';
import OfferScreen from '~/components/offer-screen/offer-screen';
import PrivateRoute from '~/components/private-route/private-route';

const WrappedMainScreen = withActiveItem(MainScreen);
const WrappedAuthScreen = withFormEditing(AuthScreen);
const WrappedOfferScreen = withActiveItem(OfferScreen);

const App = ({reviews}) => (
  <BrowserRouter>
    <Switch>
      <Route path={AppRoute.MAIN} exact>
        <WrappedMainScreen />
      </Route>
      <Route path={AppRoute.LOGIN} exact>
        <WrappedAuthScreen />
      </Route>
      <PrivateRoute path={AppRoute.FAVORITES} exact>
        <FavoritesScreen />
      </PrivateRoute>
      <Route path={AppRoute.OFFER_ID} exact>
        <WrappedOfferScreen reviews={reviews} />
      </Route>
    </Switch>
  </BrowserRouter>
);

App.propTypes = {
  reviews: PropTypes.arrayOf(reviewType.isRequired).isRequired,
};

export default App;
