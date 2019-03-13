import apis from '../apis';

/**
 *
 * @param {*} url
 * @param {*} options
 */
const request = (url, options) => {
  const data = options.method === 'GET'
    ? options.data : JSON.stringify(options.data);
  return new Promise((resolve, reject) => {
    wx.request({
      url: apis.baseUrl + url,
      method: options.methed,
      data: data,
      timeout: apis.timeout,
      header: apis.header,
      dataType: apis.dataType,
      success: (res) => {
        setTimeout(() => {
          res = res || {};
          const {data} = res;
          resolve(data);
        }, 500);
      },
      fail: (err) => {
        setTimeout(() => {
          reject(err);
        }, 500);
      },
      complete: (res) => {
        setTimeout(() => {
          res = res || {};
          const {data} = res;
          resolve(data);
        }, 500);
      }
    });
  });
};
/**
 *
 * @param {*} api
 * @param {*} data
 */
export const get = (api, data = {}) => {
  return request(api.url, {method: 'GET', data: data});
};
/**
 *
 * @param {*} api
 * @param {*} options
 */
export const post = (api, options) => {
  const data = Object.assign({}, api.params, options);
  return request(api.url, {methed: 'POST', data: data});
};
/**
 *
 * @param params
 */
export const setRequestHeader = (params) => {
  apis.headers = Object.assign(apis.headers, params);
};
