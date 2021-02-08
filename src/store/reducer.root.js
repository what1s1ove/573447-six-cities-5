import {combineReducers} from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr';
import {
  userReducer,
  placesDataReducer,
  placeReducer,
  favoritesReducer,
} from '~/store/reducers/reducers';

const rootReducer = combineReducers({
  user: userReducer,
  toastr: toastrReducer,
  data: placesDataReducer,
  place: placeReducer,
  favorites: favoritesReducer,
});

export default rootReducer;
