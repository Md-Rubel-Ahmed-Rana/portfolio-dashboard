import { ICommit, IDispatch } from "./../types/vuex.types";
import router from "@/router";
import { IProject } from "@/types/project.type";
import axios from "axios";
const baseApi = process.env.VUE_APP_BASE_API;

export const projectApis = {
  async getProjects({ commit }: ICommit) {
    const res = await axios.get(`${baseApi}/project`);
    commit("setProjects", res?.data?.data);
  },
  async getSingleProject({ commit }: ICommit, projectId: string) {
    const res = await axios.get(`${baseApi}/project/single/${projectId}`);
    commit("setProject", res?.data?.data);
  },
  async deleteProject({ dispatch }: IDispatch, projectId: string) {
    await axios.delete(`${baseApi}/project/delete/${projectId}`);
    dispatch("getProjects");
    router.push("/dashboard/projects");
  },
  async updateProject(
    { dispatch }: IDispatch,
    { projectId, updatedData }: { projectId: string; updatedData: IProject }
  ) {
    await axios.patch(`${baseApi}/project/update/${projectId}`, updatedData);
    router.push(`/dashboard/projects/${projectId}`);
  },
  async addNewProject({ dispatch }: IDispatch, data: IProject) {
    await axios.post(`${baseApi}/project/add`, data);
    dispatch("getProjects");
    router.push("/dashboard/projects");
  },
};
