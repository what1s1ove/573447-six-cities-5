import * as React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AppRoute, AuthStatus} from '~/common/enums/enums';
import {getUserStatus} from '~/store/selectors/selectors';

const UnPrivateRoute = (props) => {
  const authStatus = useSelector(getUserStatus);

  const isLogin = authStatus === AuthStatus.AUTH;

  if (isLogin) {
    return <Redirect to={AppRoute.MAIN} />;
  }

  return <Route {...props} />;
};

export default UnPrivateRoute;
