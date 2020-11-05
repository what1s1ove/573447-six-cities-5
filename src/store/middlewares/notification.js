import {actions} from 'react-redux-toastr';
import {bindActionCreators} from 'redux';
import {AppActionType} from '~/common/enums/enums';

const notification = (store) => (next) => (action) => {
  if (action.type === AppActionType.SET_NOTIFICATION) {
    const {message, type, isShow} = action.payload;

    if (isShow) {
      const toastr = bindActionCreators(actions, store.dispatch);

      toastr.add({
        type,
        message,
      });
    }
  }

  return next(action);
};

export {notification};
