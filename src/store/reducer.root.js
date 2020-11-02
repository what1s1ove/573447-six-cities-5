import {combineReducers} from 'redux';
import {placesDataReducer, appReducer} from '~/store/reducers/reducers';

const rootReducer = combineReducers({
  data: placesDataReducer,
  app: appReducer,
});

export default rootReducer;
