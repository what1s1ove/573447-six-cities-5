import {combineReducers} from 'redux';
import {
  placesDataReducer,
  userReducer,
  placeReducer,
  favoritesReducer,
} from '~/store/reducers/reducers';

const rootReducer = combineReducers({
  data: placesDataReducer,
  place: placeReducer,
  favorites: favoritesReducer,
  user: userReducer,
});

export default rootReducer;
