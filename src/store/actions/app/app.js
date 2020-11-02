import {AppActionType} from '~/common/enums/enums';

const AppActionCreator = {
  setError: (error) => ({
    type: AppActionType.SET_ERROR,
    payload: {
      error,
    },
  }),
};

export {AppActionCreator};
