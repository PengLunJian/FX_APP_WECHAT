import {handleActions} from 'redux-actions';
import * as actionTypes from '../actionTypes';
import * as states from '../states';

const actions = {
  [actionTypes.SELECT_PAYMENT_REQUEST](state) {
    console.log('request');
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
  [actionTypes.SELECT_PAYMENT_SUCCESS](state, action) {
    console.log('success');
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
  [actionTypes.SELECT_PAYMENT_FAILURE](state) {
    console.log('failure');
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

const HOME_REDUCER = handleActions(actions, states.HOME_STATE);

export default HOME_REDUCER;
