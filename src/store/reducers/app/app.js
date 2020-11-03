import {AppActionType} from '~/common/enums/enums';
import {extendObject} from '~/helpers/helpers';

const initialState = {
  error: null,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case AppActionType.SET_ERROR: {
      const {error} = action.payload;

      return extendObject(state, {
        error,
      });
    }
  }

  return state;
};

export {appReducer};
