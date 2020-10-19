import {combineReducers} from 'redux';
import {offersReducer} from '~/store/reducers/reducers';

const rootReducer = combineReducers({
  offers: offersReducer,
});

export default rootReducer;
