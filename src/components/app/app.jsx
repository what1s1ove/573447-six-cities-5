import * as React from 'react';
import {Router as BrowserRouter, Switch, Route} from 'react-router-dom';
import {AppRoute} from '~/common/enums/enums';
import browserHistory from '~/browser-history';
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

const App = () => (
  <BrowserRouter history={browserHistory}>
    <Switch>
      <Route path={AppRoute.MAIN} component={WrappedMainScreen} exact />
      <Route path={AppRoute.LOGIN} component={WrappedAuthScreen} exact />
      <Route path={AppRoute.OFFER_ID} component={WrappedOfferScreen} exact />
      <PrivateRoute path={AppRoute.FAVORITES} component={FavoritesScreen} exact />
    </Switch>
  </BrowserRouter>
);

export default App;
