import { createStore } from "vuex";
import axios from "axios";

const baseApi = "https://portfolio-backend-v2-p89h.onrender.com/api/v2";

export default createStore({
  state: {
    projects: [],
    project: null,
  },
  getters: {
    projects(state) {
      return state.projects;
    },
    project(state) {
      return state.project;
    },
  },
  mutations: {
    setProjects(state, projects) {
      state.projects = projects;
    },
    setProject(state, project) {
      state.project = project;
    },
  },
  actions: {
    async getProjects({ commit }) {
      const res = await axios.get(`${baseApi}/project`);
      commit("setProjects", res?.data?.data);
    },
    async getSingleProject({ commit }, projectId) {
      const res = await axios.get(`${baseApi}/project/single/${projectId}`);
      commit("setProject", res?.data?.data);
    },
  },
  modules: {},
});
