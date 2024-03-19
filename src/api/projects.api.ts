import axios from "axios";
const baseApi = process.env.BASE_API || "http://localhost:5002/api/v2";

export const projectApis = {
  async getProjects({ commit }: any) {
    const res = await axios.get(`${baseApi}/project`);
    commit("setProjects", res?.data?.data);
  },
  async getSingleProject({ commit }: any, projectId: string) {
    const res = await axios.get(`${baseApi}/project/single/${projectId}`);
    commit("setProject", res?.data?.data);
  },
};
