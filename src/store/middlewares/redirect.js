import browserHistory from '~/browser-history';
import {UserActionType} from '~/common/enums/enums';

const redirect = () => (next) => (action) => {
  if (action.type === UserActionType.REDIRECT_TO_ROUTE) {
    browserHistory.push(action.payload.path);
  }

  return next(action);
};

export {redirect};
