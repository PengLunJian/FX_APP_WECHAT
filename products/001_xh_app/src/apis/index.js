const apis = {
  baseUrl: 'https://apis.xuhuihealth.cn/',
  method: 'POST',
  timeout: 5000,
  dataType: 'json',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8'
  },
  selectPayment: {
    url: 'select/payment'
  },
  selectProduct: {
    url: 'select/product'
  }
};

export default apis;
