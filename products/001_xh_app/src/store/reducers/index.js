import {combineReducers} from 'redux';
import HOME_REDUCER from './home';
import ZFYM_REDUCER from './cart';

export default combineReducers({
  HOME_REDUCER,
  ZFYM_REDUCER
});
