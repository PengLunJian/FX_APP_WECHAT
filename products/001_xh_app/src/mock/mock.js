import Mock from 'mockjs';
import apis from '../apis';
import * as data from './data';
import * as utils from '../utils';

Mock.setup({
  timeout: 1500
});

Mock.exeMock = (apiMain, callback) => {
  Mock.mock(apis.baseUrl + apiMain.url, apis.method, (response) => {
    return callback(response);
  });
};

Mock.exeMock(apis.selectAccount, (response) => {
  return data.data1;
});

Mock.exeMock(apis.selectProducts, (response) => {
  const newData = utils.pagination(data.data2);
  return newData;
});
