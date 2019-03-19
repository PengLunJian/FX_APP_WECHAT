import {
  ajaxRequestSelectProduct
} from '../../store/actions';

export const STATES = {
  isLoading: state => state.ZFYM_REDUCER.product.isLoading,
  isSuccess: state => state.ZFYM_REDUCER.product.isSuccess,
  isFailure: state => state.ZFYM_REDUCER.product.isFailure,
  isData: state => state.ZFYM_REDUCER.product.data
};

export const ACTIONS = {
  ajaxRequestSelectProduct
};
