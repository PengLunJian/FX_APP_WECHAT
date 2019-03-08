import apis from '../apis/index';
import configStore from './index';
import * as $ajax from '../ajax/index';
import * as actionTypes from './actionTypes';

/**
 *
 * @param type
 * @param data
 */
const commit = (type, data) => {
  const store = configStore();
  store.dispatch({
    type,
    data
  });
};
/**
 *
 * @returns {Promise<any>}
 */
export const ajaxRequestSelectProducts = (data) => {
  commit(actionTypes.SELECT_PRODUCTS_REQUEST);
  return new Promise((resolve, reject) => {
    $ajax.post(apis.selectProducts, data)
      .then((res) => {
        res = res || {};
        const {data, success} = res;
        if (success) {
          commit(actionTypes.SELECT_PRODUCTS_SUCCESS, data);
        } else {
          commit(actionTypes.SELECT_PRODUCTS_FAILURE);
        }
        resolve(res);
      })
      .catch((err) => {
        commit(actionTypes.SELECT_PRODUCTS_FAILURE);
        reject(err);
      });
  });
};
