import {combineReducers} from 'redux';
import {
  placesDataReducer,
  userReducer,
  placeReducer,
} from '~/store/reducers/reducers';

const rootReducer = combineReducers({
  data: placesDataReducer,
  place: placeReducer,
  user: userReducer,
});

export default rootReducer;
