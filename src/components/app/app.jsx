import * as React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PropsTypes from 'prop-types';
import MainScreen from '../main-screen/main-screen';
import AuthScree from '../auth-screen/auth-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import RoomScreen from '../room-screen/room-screen';
import {AppRoute} from '~/common/enums/app/app-route.enum';

const App = ({offersCount}) => (
  <BrowserRouter>
    <Switch>
      <Route path={AppRoute.MAIN} exact>
        <MainScreen offersCount={offersCount} />
      </Route>
      <Route path={AppRoute.LOGIN} exact>
        <AuthScree />
      </Route>
      <Route path={AppRoute.FAVORITES} exact>
        <FavoritesScreen />
      </Route>
      <Route path={AppRoute.ROOM_$OFFER_ID} exact>
        <RoomScreen />
      </Route>
    </Switch>
  </BrowserRouter>
);

App.propTypes = {
  offersCount: PropsTypes.number.isRequired,
};

export default App;
