import { ICommit } from "@/types/vuex.types";
import axios from "axios";
import { authHeader, baseApi } from ".";

export const feedbackApi = {
  async getFeedbacks({ commit }: ICommit) {
    const res = await axios.get(`${baseApi}/feedback/all`, {
      headers: authHeader,
    });
    commit("setFeedbacks", res?.data?.data);
  },
};
