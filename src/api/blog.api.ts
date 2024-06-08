import { ICommit } from "@/types/vuex.types";
import axios from "axios";
import { authHeader, baseApi } from ".";

export const blogApi = {
  async getBlogs({ commit }: ICommit) {
    const res = await axios.get(`${baseApi}/blog`, { headers: authHeader });
    commit("setBlogs", res?.data?.data);
  },
};
