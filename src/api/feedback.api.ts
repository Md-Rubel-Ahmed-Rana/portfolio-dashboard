import { IFeedback } from "./../types/feedback.type";
import { ICommit, IDispatch } from "@/types/vuex.types";
import axios from "axios";
import { authHeader, baseApi } from ".";

export const feedbackApi = {
  async getFeedbacks({ commit }: ICommit, { filter }: { filter: string }) {
    const res = await axios.get(`${baseApi}/feedback/all?filter=${filter}`, {
      headers: authHeader,
    });
    commit("setFeedbacks", res?.data?.data);
  },
  async updateFeedback(
    { dispatch }: IDispatch,
    { id, payload }: { id: string; payload: IFeedback }
  ) {
    await axios.patch(`${baseApi}/feedback/update/${id}`, payload, {
      headers: authHeader,
    });
    dispatch("getFeedbacks");
  },
  async deleteFeedback({ commit }: ICommit, { id }: { id: string }) {
    await axios.delete(`${baseApi}/feedback/delete/${id}`, {
      headers: authHeader,
    });
    const res = await axios.get(`${baseApi}/feedback/all?filter=all`, {
      headers: authHeader,
    });
    commit("setFeedbacks", res?.data?.data);
  },
};
