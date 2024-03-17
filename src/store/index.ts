import { createStore } from "vuex";
import axios from "axios";

const baseApi = "https://portfolio-backend-v2-p89h.onrender.com/api/v2";

export default createStore({
  state: {
    projects: [],
    product: null,
  },
  getters: {},
  mutations: {
    setProjects(state, projects) {
      state.projects = projects;
    },
    setProject(state, project) {
      state.product = project;
    },
  },
  actions: {
    async getProjects({ commit }) {
      const res = await axios.get(`${baseApi}/project`);
      console.log(res.data.data);
      commit("setProjects", res?.data?.data);
    },
  },
  modules: {},
});
