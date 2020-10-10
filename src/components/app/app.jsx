import * as React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import MainScreen from '../main-screen/main-screen';
import AuthScree from '../auth-screen/auth-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import RoomScreen from '../room-screen/room-screen';
import {AppRoute} from '~/common/enums/enums';

const App = ({offersCount, offers}) => (
  <BrowserRouter>
    <Switch>
      <Route path={AppRoute.MAIN} exact>
        <MainScreen offersCount={offersCount} offers={offers} />
      </Route>
      <Route path={AppRoute.LOGIN} exact>
        <AuthScree />
      </Route>
      <Route path={AppRoute.FAVORITES} exact>
        <FavoritesScreen />
      </Route>
      <Route path={AppRoute.OFFER} exact>
        <RoomScreen />
      </Route>
    </Switch>
  </BrowserRouter>
);

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
};

export default App;
