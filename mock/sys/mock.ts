import { MockMethod } from 'vite-plugin-mock';
import { resultError, resultSuccess, getRequestToken, requestParams } from '../_util';

export function createFakeUserList() {
  return [
    {
      userId: '3',
      username: 'jacob',
      realName: 'Hello Jacob',
      avatar: 'https://q1.qlogo.cn/g?b=qq&nk=10000&s=640',
      desc: 'manager',
      password: '123456',
      token: 'fakeToken1',
      roles: [
        {
          roleName: 'Super Man',
          value: 'super',
        },
      ],
    },
  ];
}

export default [
  // mock user login
  {
    url: '/basic-api/getMockUserInfo',
    method: 'get',
    response: (request: requestParams) => {
      const token = getRequestToken(request);
      if (!token) return resultError('Invalid token');
      const checkUser = createFakeUserList().find((item) => item.token === token);
      if (!checkUser) {
        return resultError('The corresponding user information was not obtained!');
      }
      return resultSuccess(checkUser);
    },
  },
] as MockMethod[];
