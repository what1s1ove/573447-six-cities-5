import {combineReducers} from 'redux';
import {placesDataReducer} from '~/store/reducers/reducers';

const rootReducer = combineReducers({
  data: placesDataReducer,
});

export default rootReducer;
