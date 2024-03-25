import { IExperience } from "./../types/experience.type";
import axios from "axios";
import { ICommit, IDispatch } from "../types/vuex.types";
import router from "@/router";
const baseApi = process.env.VUE_APP_BASE_API;

export const experienceApi = {
  async getExperiences({ commit }: ICommit) {
    const res = await axios.get(`${baseApi}/experience`);
    commit("setExperiences", res.data.data);
  },
  async getExperience({ commit }: ICommit, id: string) {
    const res = await axios.get(`${baseApi}/experience/single/${id}`);
    commit("setExperience", res.data.data);
  },
  async updateExperience(
    { dispatch }: IDispatch,
    { id, updatedData }: { id: string; updatedData: IExperience }
  ) {
    await axios.patch(`${baseApi}/experience/update/${id}`, updatedData);
    router.push(`/dashboard/experiences/${id}`);
  },
  async addNewExperience({ dispatch }: IDispatch, data: IExperience) {
    await axios.post(`${baseApi}/experience/add`, data);
    dispatch("getExperiences");
    router.push("/dashboard/experiences");
  },
  async deleteExperience({ dispatch }: IDispatch, id: string) {
    await axios.delete(`${baseApi}/experience/delete/${id}`);
    dispatch("getExperiences");
    router.push("/dashboard/experiences");
  },
};
