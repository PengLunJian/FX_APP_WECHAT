const apis = {
  baseUrl: '/api/',
  method: 'POST',
  timeout: 20000,
  dataType: 'json',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json; charset=UTF-8'
  },
  selectProducts: {
    url: 'select/products',
    params: {
      pageCode: 1,
      pageSize: 10
    }
  }
};

export default apis;
