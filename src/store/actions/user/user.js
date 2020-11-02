import {AppActionCreator} from '~/store/actions/app/app';
import {adaptUserToClient} from '~/helpers/helpers';
import {AppRoute, AuthStatus, UserActionType} from '~/common/enums/enums';

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
  checkAuth: () => (dispatch, _, {api}) => {
    api
      .get(`/login`)
      .then(({data}) =>
        dispatch(UserActionCreator.setUser(adaptUserToClient(data)))
      )
      .then(() => dispatch(UserActionCreator.setAuthStatus(AuthStatus.AUTH)))
      .catch((err) => AppActionCreator.setError(err));
  },
  login: ({email, password}) => (dispatch, _, {api}) => {
    api
      .post(`/login`, {email, password})
      .then(({data}) =>
        dispatch(UserActionCreator.setUser(adaptUserToClient(data)))
      )
      .then(() => dispatch(UserActionCreator.setAuthStatus(AuthStatus.AUTH)))
      .then(() => dispatch(AppActionCreator.redirectToRoute(AppRoute.MAIN)))
      .catch((err) => AppActionCreator.setError(err));
  },
  logout: () => (dispatch) => {
    Promise.resolve()
      .then(() => dispatch(UserActionCreator.setUser(null)))
      .then(() => dispatch(UserActionCreator.setAuthStatus(AuthStatus.NO_AUTH)))
      .then(() => dispatch(AppActionCreator.redirectToRoute(AppRoute.LOGIN)));
  },
};

export {UserActionCreator};
