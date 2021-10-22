/*
 * @Author: xingpan 
 * @Date: 2021-10-22 16:44:25 
 * @Last Modified by: xingpan
 * @Last Modified time: 2021-10-22 16:49:51
 */
import { createStore } from 'vuex';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state from './state';

export default createStore({
    actions,
    getters, 
    mutations,
    state
})
