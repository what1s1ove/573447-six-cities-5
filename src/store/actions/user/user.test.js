import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '~/services/api/api';
import {adaptUserToClient} from '~/helpers/helpers';
import {mockedUser, mockedFetchedUser} from '~/mocks/mocks';
import {
  ApiRoute,
  AppRoute,
  AuthStatus,
  HttpCode,
  UserActionType,
} from '~/common/enums/enums';
import {UserActionCreator} from './user';

const api = createAPI({
  onUnauthorized: jest.fn(),
});

describe(`User action creator works correctly`, () => {
  it(`setAuthStatus ac returns correct action`, () => {
    expect(UserActionCreator.setAuthStatus(AuthStatus.AUTH)).toEqual({
      type: UserActionType.SET_AUTH_STATUS,
      payload: {
        status: AuthStatus.AUTH,
      },
    });
  });

  it(`setUser ac returns correct action`, () => {
    expect(UserActionCreator.setUser(mockedUser)).toEqual({
      type: UserActionType.SET_USER,
      payload: {
        user: mockedUser,
      },
    });
  });

  it(`redirectToRoute ac returns correct action`, () => {
    expect(UserActionCreator.redirectToRoute(AppRoute.MAIN)).toEqual({
      type: UserActionType.REDIRECT_TO_ROUTE,
      payload: {
        path: AppRoute.MAIN,
      },
    });
  });

  it(`checkAuth ac returns correct action. Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = UserActionCreator.checkAuth();

    apiMock.onGet(ApiRoute.LOGIN).reply(HttpCode.SUCCESS, mockedFetchedUser);

    return checkAuthLoader(dispatch, jest.fn(), {api}).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);

      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: UserActionType.SET_USER,
        payload: {
          user: adaptUserToClient(mockedFetchedUser),
        },
      });

      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: UserActionType.SET_AUTH_STATUS,
        payload: {
          status: AuthStatus.AUTH,
        },
      });
    });
  });

  it(`login ac returns correct action. Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {login: `test@test.ru`, password: `123456`};
    const loginLoader = UserActionCreator.login(fakeUser);

    apiMock.onPost(ApiRoute.LOGIN).reply(HttpCode.SUCCESS, mockedFetchedUser);

    return loginLoader(dispatch, jest.fn(), {api}).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(3);

      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: UserActionType.SET_USER,
        payload: {
          user: adaptUserToClient(mockedFetchedUser),
        },
      });

      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: UserActionType.SET_AUTH_STATUS,
        payload: {
          status: AuthStatus.AUTH,
        },
      });

      expect(dispatch).toHaveBeenNthCalledWith(3, {
        type: UserActionType.REDIRECT_TO_ROUTE,
        payload: {
          path: AppRoute.MAIN,
        },
      });
    });
  });

  it(`logout ac returns correct action`, () => {
    const dispatch = jest.fn();
    const logoutLoader = UserActionCreator.logout();

    return logoutLoader(dispatch, jest.fn(), {api}).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(3);

      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: UserActionType.SET_USER,
        payload: {
          user: null,
        },
      });

      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: UserActionType.SET_AUTH_STATUS,
        payload: {
          status: AuthStatus.NO_AUTH,
        },
      });

      expect(dispatch).toHaveBeenNthCalledWith(3, {
        type: UserActionType.REDIRECT_TO_ROUTE,
        payload: {
          path: AppRoute.LOGIN,
        },
      });
    });
  });
});
