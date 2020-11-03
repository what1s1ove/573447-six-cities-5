import browserHistory from '~/browser-history';
import {AppActionType} from '~/common/enums/enums';

const redirect = () => (next) => (action) => {
  if (action.type === AppActionType.REDIRECT_TO_ROUTE) {
    browserHistory.push(action.payload.path);
  }

  return next(action);
};

export {redirect};
