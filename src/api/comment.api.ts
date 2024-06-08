import { ICommit } from "@/types/vuex.types";
import axios from "axios";
import { authHeader, baseApi } from ".";

export const commentApi = {
  async getComments({ commit }: ICommit) {
    const res = await axios.get(`${baseApi}/comment`, { headers: authHeader });
    commit("setComments", res?.data?.data);
  },
};
