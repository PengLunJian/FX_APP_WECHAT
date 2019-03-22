import * as actions from '../../store/actions';

export const STATES = {
  isLoading: state => state.CART_REDUCER.product.isLoading,
  isSuccess: state => state.CART_REDUCER.product.isSuccess,
  isFailure: state => state.CART_REDUCER.product.isFailure,
  isData: state => state.CART_REDUCER.product.data
};

export const ACTIONS = {
  selectProduct: actions.ajaxRequestSelectProduct
};
