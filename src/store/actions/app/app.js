import {AppActionType} from '~/common/enums/enums';

const AppActionCreator = {
  setNotification: ({message, type, isShow = true}) => ({
    type: AppActionType.SET_NOTIFICATION,
    payload: {
      message,
      type,
      isShow,
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
