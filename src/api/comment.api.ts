import { ICommit } from "@/types/vuex.types";
import axios from "axios";
import { authHeader, baseApi } from ".";

export const commentApi = {
  async getComments({ commit }: ICommit, { postId }: { postId: string }) {
    let res;
    if (postId && postId !== "All") {
      res = await axios.get(`${baseApi}/comment?filter=${postId}`, {
        headers: authHeader,
      });
    } else {
      res = await axios.get(`${baseApi}/comment`, {
        headers: authHeader,
      });
    }
    commit("setComments", res?.data?.data);
  },

  async toggleSuspend(
    { commit }: ICommit,
    { id, suspend }: { id: string; suspend: boolean }
  ) {
    await axios.patch(
      `${baseApi}/comment/suspend/${id}`,
      { suspend },
      {
        headers: authHeader,
      }
    );
    const res = await axios.get(`${baseApi}/comment`, {
      headers: authHeader,
    });
    commit("setComments", res?.data?.data);
  },

  async deleteComment({ commit }: ICommit, { id }: { id: string }) {
    await axios.delete(`${baseApi}/comment/delete/${id}`, {
      headers: authHeader,
    });
    const res = await axios.get(`${baseApi}/comment`, {
      headers: authHeader,
    });
    commit("setComments", res?.data?.data);
  },
};
