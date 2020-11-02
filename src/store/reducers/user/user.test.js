import {AuthStatus, UserActionType} from '~/common/enums/enums';
import {mockedUser} from '~/mocks/mocks';
import {initialState, userReducer} from './user';

describe(`User reducer works correctly`, () => {
  it(`Should return initial state without additional parameters `, () => {
    expect(userReducer(void 0, {})).toEqual(initialState);
  });

  it(`setAuthStatus case works correctly`, () => {
    expect(
        userReducer(
            {
              status: AuthStatus.NO_AUTH,
              user: null,
            },
            {
              type: UserActionType.SET_AUTH_STATUS,
              payload: {
                status: AuthStatus.AUTH,
              },
            }
        )
    ).toEqual({
      status: AuthStatus.AUTH,
      user: null,
    });
  });

  it(`setUser case works correctly`, () => {
    expect(
        userReducer(
            {
              status: AuthStatus.NO_AUTH,
              user: null,
            },
            {
              type: UserActionType.SET_USER,
              payload: {
                user: mockedUser,
              },
            }
        )
    ).toEqual({
      status: AuthStatus.NO_AUTH,
      user: mockedUser,
    });
  });
});
