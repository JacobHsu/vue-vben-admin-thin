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
