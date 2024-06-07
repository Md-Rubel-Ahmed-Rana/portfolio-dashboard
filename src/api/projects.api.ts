import { ICommit, IDispatch } from "./../types/vuex.types";
import router from "@/router";
import { IProject } from "@/types/project.type";
import axios from "axios";
import { authHeader, baseApi } from ".";

export const projectApis = {
  async getProjects({ commit }: ICommit) {
    const res = await axios.get(`${baseApi}/project`, { headers: authHeader });
    commit("setProjects", res?.data?.data);
  },
  async getSingleProject({ commit }: ICommit, projectId: string) {
    const res = await axios.get(`${baseApi}/project/single/${projectId}`, {
      headers: authHeader,
    });
    commit("setProject", res?.data?.data);
  },
  async deleteProject({ dispatch }: IDispatch, projectId: string) {
    await axios.delete(`${baseApi}/project/delete/${projectId}`, {
      headers: authHeader,
    });
    dispatch("getProjects");
    router.push("/dashboard/projects");
  },
  async updateProject(
    { dispatch }: IDispatch,
    { projectId, updatedData }: { projectId: string; updatedData: IProject }
  ) {
    await axios.patch(`${baseApi}/project/update/${projectId}`, updatedData, {
      headers: authHeader,
    });
    router.push(`/dashboard/projects/${projectId}`);
  },
  async addNewProject({ dispatch }: IDispatch, data: IProject) {
    await axios.post(`${baseApi}/project/add`, data, { headers: authHeader });
    dispatch("getProjects");
    router.push("/dashboard/projects");
  },
};
