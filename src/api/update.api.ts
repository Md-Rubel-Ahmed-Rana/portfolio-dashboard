import { IUpdate } from "@/types/update.type";
import { ICommit, IDispatch } from "@/types/vuex.types";
import { authHeader, baseApi } from ".";
import axios from "axios";
import router from "@/router";

export const updateApi = {
  async getUpdates({ commit }: ICommit) {
    const res = await axios.get(`${baseApi}/update`, { headers: authHeader });
    commit("setUpdates", res?.data?.data);
  },
  async getUpdate({ commit }: ICommit, { id }: { id: string }) {
    const res = await axios.get(`${baseApi}/update/single/${id}`, {
      headers: authHeader,
    });
    commit("setUpdate", res?.data?.data);
  },
  async addNewUpdate(
    { dispatch }: IDispatch,
    { payload }: { payload: IUpdate }
  ) {
    const res = await axios.post(`${baseApi}/update/add`, payload, {
      headers: authHeader,
    });
    dispatch("getUpdates");
    router.push("/dashboard/updates");
  },
  async editUpdate(
    { dispatch }: IDispatch,
    { id, payload }: { id: string; payload: IUpdate }
  ) {
    const res = await axios.patch(`${baseApi}/update/update/${id}`, payload, {
      headers: authHeader,
    });
    dispatch("getUpdates");
    router.push("/dashboard/updates");
  },
  async deleteUpdate({ dispatch }: IDispatch, { id }: { id: string }) {
    const res = await axios.delete(`${baseApi}/update/delete/${id}`, {
      headers: authHeader,
    });
    dispatch("getUpdates");
  },
};
