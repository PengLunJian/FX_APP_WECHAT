import * as actions from '../../store/actions';

export const STATES = {
  isLoading: state => state.HOME_REDUCER.qrcode.isLoading,
  isSuccess: state => state.HOME_REDUCER.qrcode.isSuccess,
  isFailure: state => state.HOME_REDUCER.qrcode.isFailure,
  isData: state => state.HOME_REDUCER.qrcode.data
};

export const ACTIONS = {
  selectQRCode: actions.ajaxRequestSelectQRCode
};
