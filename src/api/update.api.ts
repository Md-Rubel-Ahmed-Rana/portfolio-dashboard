import { ICommit } from "@/types/vuex.types";
import { authHeader, baseApi } from ".";
import axios from "axios";

export const updateApi = {
  async getUpdates({ commit }: ICommit) {
    const res = await axios.get(`${baseApi}/update`, { headers: authHeader });
    commit("setUpdates", res?.data?.data);
  },
};
