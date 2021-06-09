# api

src\hooks\setting\index.ts

```js
useGlobSetting

import { getAppEnvConfig } from '/@/utils/env';

const {
  VITE_GLOB_API_URL, // VITE_GLOB_API_URL=/basic-api
} = getAppEnvConfig();

const glob: Readonly<GlobConfig> = {
    apiUrl: VITE_GLOB_API_URL,
  };
```

## mock

Request URL: `http://localhost:3100/basic-api/login`
Request Method: `POST`

配置Mock `build\vite\plugin\mock.ts`
配置进Vite `build\vite\plugin\index.ts`

mock\sys\user.ts

```js
import { MockMethod } from 'vite-plugin-mock';
export default [
  // mock user login
  {
    url: '/basic-api/login',
    timeout: 200,
    method: 'post',
    ...
] as MockMethod[];
```

vite.config.ts

```js
  const viteEnv = wrapperEnv(env);
      server: {
      port: VITE_PORT, // 3100
      // Load proxy configuration from .env
      proxy: createProxy(VITE_PROXY),
    },
```

http://localhost:3100/basic-api/getUserInfo
{"code":-1,"result":null,"message":"Invalid token","type":"error"}

## store

store\modules\user.ts

```js
import { getUserInfo, loginApi } from '/@/api/sys/user';
   async login(
      params: LoginParams & {
        goHome?: boolean;
        mode?: ErrorMessageMode;
      }
    ): Promise<GetUserInfoModel | null> {
      try {
        const { goHome = true, mode, ...loginParams } = params;
        const data = await loginApi(loginParams, mode);
        const { token } = data;
        const userInfo = await this.getUserInfoAction();

   async getUserInfoAction() {
      const userInfo = await getUserInfo();
      const { roles } = userInfo;
      const roleList = roles.map((item) => item.value) as RoleEnum[];
      this.setUserInfo(userInfo);
      this.setRoleList(roleList);
      return userInfo;
    },
```

src\api\sys\user.ts

```js
export function loginApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<LoginResultModel>(
    {
      url: Api.Login,
      params,
    },
    {
      errorMessageMode: mode,
    }
  );
}
```
