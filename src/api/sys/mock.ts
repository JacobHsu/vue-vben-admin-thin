import { otherHttp } from "/@/utils/http/axios";
import { GetUserInfoModel } from "./model/userModel";

enum Api {
  GetMockUserInfo = "/v1/user", // '/getMockUserInfo'
}

/**
 * @description: getUserInfo
 */
export function getMockUserInfo() {
  // return defHttp.get<GetUserInfoModel>({ url: Api.GetMockUserInfo });
  return otherHttp.get<GetUserInfoModel>({ url: Api.GetMockUserInfo });
}
