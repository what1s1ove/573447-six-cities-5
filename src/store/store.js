import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createAPI} from '~/services/api/api';
import rootReducer from './reducer.root';
import {UserActionCreator} from './actions/user/user';

const api = createAPI({
  onUnauthorized: () => {
    store.dispatch(UserActionCreator.logout());
  }
});

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(
            thunk.withExtraArgument({
              api,
            })
        )
    )
);

export default store;
