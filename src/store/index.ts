import { createStore } from "vuex";

import { states } from "@/vuex/states";
import { getters } from "@/vuex/getters";
import { mutations } from "@/vuex/mutations";
import { actions } from "@/vuex/actions";

export default createStore({
  state: states,
  getters: getters,
  mutations: mutations,
  actions: actions,
  modules: {},
});
