// import {handleActions} from 'redux-actions';
import * as actionTypes from '../actionTypes';
import * as states from '../states';

// export default handleActions({
//   [actionTypes.SELECT_PAYMENT_REQUEST](state) {
//     return {
//       ...state,
//       payment: Object.assign({}, state.payment, {
//         isLoading: true,
//         isSuccess: false,
//         isFailure: false,
//         data: null
//       })
//     };
//   },
//   [actionTypes.SELECT_PAYMENT_SUCCESS](state, action) {
//     return {
//       ...state,
//       payment: Object.assign({}, state.payment, {
//         isLoading: false,
//         isSuccess: true,
//         isFailure: false,
//         data: action.data
//       })
//     };
//   },
//   [actionTypes.SELECT_PAYMENT_FAILURE](state) {
//     return {
//       ...state,
//       payment: Object.assign({}, state.payment, {
//         isLoading: false,
//         isSuccess: false,
//         isFailure: true,
//         data: null
//       })
//     };
//   }
// }, states.HOME_STATE);

const HOME_REDUCER = (state = states.HOME_STATE, action) => {
  switch (action.type) {
    case actionTypes.SELECT_PAYMENT_REQUEST:
      return {
        ...state,
        payment: Object.assign({}, state.payment, {
          isLoading: true,
          isSuccess: true,
          isFailure: false,
          data: null
        })
      };
    case actionTypes.SELECT_PAYMENT_SUCCESS:
      return {
        ...state,
        payment: Object.assign({}, state.payment, {
          isLoading: false,
          isSuccess: true,
          isFailure: false,
          data: action.data
        })
      };
    case actionTypes.SELECT_PAYMENT_FAILURE:
      return {
        ...state,
        payment: Object.assign({}, state.payment, {
          isLoading: true,
          isSuccess: false,
          isFailure: false,
          data: null
        })
      };
    default:
      return state;
  }
};

export default HOME_REDUCER;
