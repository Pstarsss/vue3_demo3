/*
 * @Author: xingpan 
 * @Date: 2021-10-27 18:42:05 
 * @Last Modified by: xingpan
 * @Last Modified time: 2021-10-27 19:18:31
 */

import { AxiosResponse } from 'axios';

export interface StatusKey {
    code: number,
    detail: string,
    serverResponseTime: number
}

export interface ResponseKey {
    body: Object | Array<Object>,
    status: StatusKey,
    // ...AxiosResponse
}

