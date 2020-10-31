import {combineReducers} from 'redux';
import {placesDataReducer, userReducer} from '~/store/reducers/reducers';

const rootReducer = combineReducers({
  data: placesDataReducer,
  user: userReducer,
});

export default rootReducer;
