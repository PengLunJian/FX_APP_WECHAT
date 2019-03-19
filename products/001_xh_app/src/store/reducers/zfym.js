import {handleActions} from 'redux-actions';
import * as actionTypes from '../actionTypes';
import * as states from '../states';

const actions = {
  [actionTypes.SELECT_PRODUCT_REQUEST](state) {
    return {
      ...state,
      payment: Object.assign({}, state.payment, {
        isLoading: true,
        isSuccess: false,
        isFailure: false,
        data: null
      })
    };
  },
  [actionTypes.SELECT_PRODUCT_SUCCESS](state, action) {
    return {
      ...state,
      payment: Object.assign({}, state.payment, {
        isLoading: false,
        isSuccess: true,
        isFailure: false,
        data: action.data
      })
    };
  },
  [actionTypes.SELECT_PRODUCT_FAILURE](state) {
    return {
      ...state,
      payment: Object.assign({}, state.payment, {
        isLoading: false,
        isSuccess: false,
        isFailure: true,
        data: null
      })
    };
  }
};

const ZFYM_REDUCER = handleActions(actions, states.ZFYM_STATE);

export default ZFYM_REDUCER;
