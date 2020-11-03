import {AppActionType} from '~/common/enums/enums';

const AppActionCreator = {
  setError: (error) => ({
    type: AppActionType.SET_ERROR,
    payload: {
      error,
    },
  }),
  redirectToRoute: (path) => ({
    type: AppActionType.REDIRECT_TO_ROUTE,
    payload: {
      path,
    },
  }),
};

export {AppActionCreator};
