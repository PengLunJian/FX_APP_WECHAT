const apis = {
  baseUrl: 'http://192.168.1.196/api/',
  method: 'post',
  timeout: 5000,
  dataType: 'json',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json; charset=UTF-8'
  },
  selectDeviceId: {
    url: 'select/device/id'
  },
  selectToken: {
    url: 'select/token'
  },
  selectRefreshToken: {
    url: 'select/refresh/token'
  },
  selectUserInfo: {
    url: 'select/user/info'
  },
  selectPayment: {
    url: 'select/payment'
  },
  selectProduct: {
    url: 'select/product'
  }
};

export default apis;
