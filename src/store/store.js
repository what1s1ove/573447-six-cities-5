import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createAPI} from '~/services/api/api';
import { redirect} from '~/store/middlewares/middlewares';
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
        ),
        applyMiddleware(redirect)
    )
);

export default store;
