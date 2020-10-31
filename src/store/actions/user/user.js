import {AppRoute, AuthStatus, UserActionType} from '~/common/enums/enums';
import { adaptUserToClient } from '~/helpers/user';

const UserActionCreator = {
  setAuthStatus: (status) => ({
    type: UserActionType.SET_AUTH_STATUS,
    payload: {
      status,
    },
  }),
  setUser: (user) => ({
    type: UserActionType.SET_USER,
    payload: {
      user,
    },
  }),
  redirectToRoute: (path) => ({
    type: UserActionType.REDIRECT_TO_ROUTE,
    payload: {
      path,
    },
  }),
  checkAuth: () => (dispatch, _, {api}) => {
    api
      .get(`/login`)
      .then(({data}) =>
        dispatch(UserActionCreator.setUser(adaptUserToClient(data)))
      )
      .then(() => dispatch(UserActionCreator.setAuthStatus(AuthStatus.AUTH)))
      .catch((err) => {
        throw err;
      });
  },
  login: ({email, password}) => (dispatch, _, {api}) => {
    api
      .post(`/login`, {email, password})
      .then(({data}) =>
        dispatch(UserActionCreator.setUser(adaptUserToClient(data)))
      )
      .then(() => dispatch(UserActionCreator.setAuthStatus(AuthStatus.AUTH)))
      .then(() => dispatch(UserActionCreator.redirectToRoute(AppRoute.MAIN)))
      .catch((err) => {
        throw err;
      });
  },
  logout: () => (dispatch) => {
    Promise.resolve()
      .then(() => dispatch(UserActionCreator.setUser(null)))
      .then(() => dispatch(UserActionCreator.setAuthStatus(AuthStatus.NO_AUTH)))
      .then(() => dispatch(UserActionCreator.redirectToRoute(AppRoute.LOGIN)));
  },
};

export {UserActionCreator};
