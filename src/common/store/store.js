/*
 * @Author: xingpan 
 * @Date: 2021-10-26 10:59:22 
 * @Last Modified by: xingpan
 * @Last Modified time: 2021-10-26 16:56:13
 */

import { createStore } from 'vuex';

import User from '../resource/user/index';

const SAVE = "SAVE";
const CLEAR = "CLEAR";

const state = {
    user: {},
    fetched: false
};

const getters = {
    fetched: state => state.fetched,
    isLogin: state => !state.user.userId,
    user: state => state.user
}

const mutations = {
    [SAVE]: (state, user) => {
        state.user = user;
        state.fetched = true;
    },

    [CLEAR]: (state, user) => {
        state.user = {};
        state.fetched = true;
    }
}

const actions = {
    
}


export default createStore({
    state,
    getters,
    mutations,
    actions
});
