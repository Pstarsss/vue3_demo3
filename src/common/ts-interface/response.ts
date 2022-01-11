/*
 * @Author: xingpan
 * @Date: 2021-10-27 18:42:05
 * @Last Modified by: xingpan
 * @Last Modified time: 2022-01-10 16:50:03
 */

// import { AxiosResponse } from "axios";
export interface StatusKey {
  code: number;
  detail: string;
  serverResponseTime: number;
}

export interface ResponseKey {
  body: any;
  status: StatusKey;
  // ...AxiosResponse
}
