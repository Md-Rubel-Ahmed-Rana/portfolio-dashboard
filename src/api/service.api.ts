import { ICommit, IDispatch } from "@/types/vuex.types";
import axios from "axios";
import { authHeader, baseApi } from ".";
import { IService } from "@/types/service.type";
import router from "@/router";

export const serviceApi = {
  async getServices({ commit }: ICommit) {
    const res = await axios.get(`${baseApi}/service`, { headers: authHeader });
    commit("setServices", res?.data?.data);
  },
  async getSingleService({ commit }: ICommit, { id }: { id: string }) {
    const res = await axios.get(`${baseApi}/service/single/${id}`, {
      headers: authHeader,
    });
    commit("setService", res?.data?.data);
  },
  async deleteService({ dispatch }: IDispatch, { id }: { id: string }) {
    const res = await axios.delete(`${baseApi}/service/delete/${id}`, {
      headers: authHeader,
    });
    dispatch("getServices");
  },
  async updateService(
    { dispatch }: IDispatch,
    { id, payload }: { id: string; payload: IService }
  ) {
    const res = await axios.patch(`${baseApi}/service/update/${id}`, payload, {
      headers: authHeader,
    });
    dispatch("getServices");
    router.push("/dashboard/services");
  },
  async addNewService(
    { dispatch }: IDispatch,
    { payload }: { payload: IService }
  ) {
    const res = await axios.post(`${baseApi}/service/add`, payload, {
      headers: authHeader,
    });
    dispatch("getServices");
    router.push("/dashboard/services");
  },
};
