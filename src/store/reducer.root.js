import {combineReducers} from 'redux';
import {
  placesDataReducer,
  userReducer,
  appReducer,
} from '~/store/reducers/reducers';

const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
  data: placesDataReducer,
});

export default rootReducer;
