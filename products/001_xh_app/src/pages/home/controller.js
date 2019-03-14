import {
  ajaxRequestSelectPayment
} from '../../store/actions';

export const STATES = {
  isLoading: state => state.HOME_REDUCER.payment.isLoading,
  isSuccess: state => state.HOME_REDUCER.payment.isSuccess,
  isFailure: state => state.HOME_REDUCER.payment.isFailure,
  isData: state => state.HOME_REDUCER.payment.data
};

export const ACTIONS = {
  ajaxRequestSelectPayment
};
