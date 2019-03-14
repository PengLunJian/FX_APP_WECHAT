import apis from '../apis';
import store from './index';
import axios from '../axios';
import * as actionTypes from './actionTypes';

/**
 *
 * @param type
 * @param data
 */
export const commit = (type, data) => {
  store.dispatch({
    type,
    data
  });
};

/**
 *
 * @returns {Promise<any>}
 */
export const ajaxRequestSelectPayment = () => {
  commit(actionTypes.SELECT_PAYMENT_REQUEST);
  return new Promise((resolve, reject) => {
    axios.post(apis.selectPayment)
      .then((res) => {
        res = res || {};
        const {data, success} = res;
        if (success) {
          commit(actionTypes.SELECT_PAYMENT_SUCCESS, data);
        } else {
          commit(actionTypes.SELECT_PAYMENT_FAILURE);
        }
        resolve(res);
      })
      .catch((err) => {
        commit(actionTypes.SELECT_PAYMENT_FAILURE);
        reject(err);
      });
  });
};
