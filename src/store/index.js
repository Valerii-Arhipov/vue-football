import Vue from 'vue';
import Vuex from 'vuex';

import { mutations } from "./mutations";
import { actions } from './actions';
import getters from "./getters";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    matches: [],
    teams: [],
    standings: [],
    scorers: [],
    loading: {
      matches: true,
      scorers: true,
      standings: true,
    },
    error: false,
  },
  mutations,
  actions,
  getters,
});

export default store;