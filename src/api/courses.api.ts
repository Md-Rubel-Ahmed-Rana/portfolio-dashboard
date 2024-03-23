import axios from "axios";
import { ICommit } from "./../types/vuex.types";
const baseApi = process.env.VUE_APP_BASE_API;

export const courseApi = {
  async getCourses({ commit }: ICommit) {
    const res = await axios.get(`${baseApi}/course`);
    commit("setCourses", res.data.data);
  },
};
