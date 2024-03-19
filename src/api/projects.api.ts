import router from "@/router";
import axios from "axios";
const baseApi = process.env.VUE_APP_BASE_API;

export const projectApis = {
  async getProjects({ commit }: any) {
    const res = await axios.get(`${baseApi}/project`);
    commit("setProjects", res?.data?.data);
  },
  async getSingleProject({ commit }: any, projectId: string) {
    const res = await axios.get(`${baseApi}/project/single/${projectId}`);
    commit("setProject", res?.data?.data);
  },
  async deleteProject({ dispatch }: any, projectId: string) {
    await axios.delete(`${baseApi}/project/delete/${projectId}`);
    dispatch("getProjects");
    router.push("/dashboard/projects");
  },
};
