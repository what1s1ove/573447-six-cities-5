import {AuthStatus, UserActionType} from '~/common/enums/enums';
import {extendObject} from '~/helpers/helpers';

const initialState = {
  user: null,
  status: AuthStatus.NO_AUTH,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActionType.SET_AUTH_STATUS: {
      const {status} = action.payload;

      return extendObject(state, {
        status,
      });
    }
    case UserActionType.SET_USER: {
      const {user} = action.payload;

      return extendObject(state, {
        user,
      });
    }
  }

  return state;
};

export {userReducer};
