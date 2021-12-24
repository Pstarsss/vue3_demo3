/*
 * @Author: xingpan
 * @Date: 2021-10-25 19:16:18
 * @Last Modified by: xingpan
 * @Last Modified time: 2021-10-29 14:20:37
 */

import { _create } from "@/common/util/axios/index";
import { CHIDORI_HOST } from "@/common/constant/host";

// console.log('_create', _create);

export const api = {
  fetchUserPrivilege: {
    url: "/admin/operation/adminUser/fetchUserPrivilege",
    method: "get",
  },

  goLogin: {
    url: `${CHIDORI_HOST}/SSO/login`,
    targetSelf: true,
  },

  modifyPassword: {
    url: `${CHIDORI_HOST}/modify-password`,
    targetSelf: true,
  },

  logout: {
    url: "/chidori/admin/user/logout",
    method: "get",
  },
};

export default _create(api);
