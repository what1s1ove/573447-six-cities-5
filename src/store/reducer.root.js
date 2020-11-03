import {combineReducers} from 'redux';
import {
  appReducer,
  userReducer,
  placesDataReducer,
  placeReducer,
  favoritesReducer,
} from '~/store/reducers/reducers';

const rootReducer = combineReducers({
  app: appReducer,
  data: placesDataReducer,
  place: placeReducer,
  favorites: favoritesReducer,
  user: userReducer,
});

export default rootReducer;
