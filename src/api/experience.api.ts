import { IExperience } from "./../types/experience.type";
import axios from "axios";
import { ICommit, IDispatch } from "../types/vuex.types";
import router from "@/router";
import { authHeader, baseApi } from ".";

export const experienceApi = {
  async getExperiences({ commit }: ICommit) {
    const res = await axios.get(`${baseApi}/experience`, {
      headers: authHeader,
    });
    commit("setExperiences", res.data.data);
  },
  async getExperience({ commit }: ICommit, id: string) {
    const res = await axios.get(`${baseApi}/experience/single/${id}`, {
      headers: authHeader,
    });
    commit("setExperience", res.data.data);
  },
  async updateExperience(
    { dispatch }: IDispatch,
    { id, updatedData }: { id: string; updatedData: IExperience }
  ) {
    await axios.patch(`${baseApi}/experience/update/${id}`, updatedData, {
      headers: authHeader,
    });
    router.push(`/dashboard/experiences/${id}`);
  },
  async addNewExperience({ dispatch }: IDispatch, data: IExperience) {
    await axios.post(`${baseApi}/experience/add`, data, {
      headers: authHeader,
    });
    dispatch("getExperiences");
    router.push("/dashboard/experiences");
  },
  async deleteExperience({ dispatch }: IDispatch, id: string) {
    await axios.delete(`${baseApi}/experience/delete/${id}`, {
      headers: authHeader,
    });
    dispatch("getExperiences");
    router.push("/dashboard/experiences");
  },
};
