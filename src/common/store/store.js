/*
 * @Author: xingpan
 * @Date: 2021-10-26 10:59:22
 * @Last Modified by: xingpan
 * @Last Modified time: 2021-10-29 14:49:19
 */

import { createStore } from "vuex";

import User from "@/common/resource/user/index";

const SAVE = "SAVE";
const CLEAR = "CLEAR";

const state = {
  user: {},
  fetched: false,
};

const getters = {
  fetched: (state) => state.fetched,
  isLogin: (state) => !state.user.userId,
  user: (state) => state.user,
};

const mutations = {
  [SAVE]: (state, user) => {
    state.user = user;
    state.fetched = true;
  },

  [CLEAR]: (state) => {
    state.user = {};
    state.fetched = true;
  },
};

const actions = {
  async fetch({ commit }) {
    const {
      data: { body: user },
    } = await User.fetchUserPrivilege();
    commit(SAVE, user);
    return user;
  },

  async logout({ commit }) {
    await User.logout();
    commit(CLEAR);
    User.goLogin({ params: { redirectUrl: location.href } });
  },
};

export default createStore({
  state,
  getters,
  mutations,
  actions,
});
