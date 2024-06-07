import { ICommit } from "@/types/vuex.types";
import axios from "axios";
import { authHeader, baseApi } from ".";

export const serviceApi = {
  async getServices({ commit }: ICommit) {
    const res = await axios.get(`${baseApi}/service`, { headers: authHeader });
    commit("setServices", res?.data?.data);
  },
};
