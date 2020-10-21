import {combineReducers} from 'redux';
import {placesReducer} from '~/store/reducers/reducers';

const rootReducer = combineReducers({
  places: placesReducer,
});

export default rootReducer;
