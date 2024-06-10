import axios from "axios";
import { authHeader, baseApi } from ".";
import { ICommit, IDispatch } from "@/types/vuex.types";

export const hireMeApi = {
  async getHireMeData({ commit }: ICommit) {
    const res = await axios.get(`${baseApi}/hire-me`, { headers: authHeader });
    commit("setHireMes", res?.data?.data);
  },
  async deleteHireMeData({ dispatch }: IDispatch, { id }: { id: string }) {
    await axios.delete(`${baseApi}/hire-me/delete/${id}`, {
      headers: authHeader,
    });
    dispatch("getHireMeData");
  },
};
