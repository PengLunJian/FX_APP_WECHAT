import {handleActions} from 'redux-actions';
import * as actionTypes from '../actionTypes';
import * as states from '../states';

export default handleActions({
  [actionTypes.SELECT_PRODUCTS_REQUEST](state) {
    return {
      ...state,
      products: Object.assign({}, state.products, {
        isLoading: true,
        isSuccess: false,
        isFailure: false,
        data: null
      })
    };
  },
  [actionTypes.SELECT_PRODUCTS_SUCCESS](state, action) {
    return {
      ...state,
      products: Object.assign({}, state.products, {
        isLoading: false,
        isSuccess: true,
        isFailure: false,
        data: action.data
      })
    };
  },
  [actionTypes.SELECT_PRODUCTS_FAILURE](state) {
    return {
      ...state,
      products: Object.assign({}, state.products, {
        isLoading: false,
        isSuccess: false,
        isFailure: true,
        data: null
      })
    };
  }
}, states.HOME_STATE);
