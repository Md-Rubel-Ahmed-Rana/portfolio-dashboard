import axios from "axios";
import { IUser } from "./../types/user.type";
import { ICommit, IDispatch } from "./../types/vuex.types";
import router from "@/router";

const baseApi = process.env.VUE_APP_BASE_API;

export const userApi = {
  async registerUser({ dispatch }: IDispatch, user: IUser) {
    const res = await axios.post(`${baseApi}/user/register`, user);
    if (res?.data) {
      if (!user.isVerified) {
        router.push("/login");
      } else {
        router.push("/dashboard/users");
      }
    }
  },

  async updateUser(
    { dispatch }: IDispatch,
    { id, user }: { id: string; user: IUser }
  ) {
    const res = await axios.patch(`${baseApi}/user/update/${id}`, user);
    if (res?.data) {
      router.push("/dashboard/users");
    }
  },

  async loginUser(
    { dispatch }: IDispatch,
    credentials: { email: string; password: string }
  ) {
    const res = await axios.post(`${baseApi}/user/login`, credentials);
    if (res?.data) {
      router.push("/dashboard");
    }
  },

  async getAllUsers({ commit }: ICommit) {
    const res = await axios.get(`${baseApi}/user`);
    commit("setUsers", res?.data?.data);
  },

  async getSingleUser({ commit }: ICommit, id: string) {
    const res = await axios.get(`${baseApi}/user/single/${id}`);
    commit("setUser", res?.data?.data);
  },
  async verifyUser({ dispatch }: IDispatch, id: string) {
    await axios.patch(`${baseApi}/user/verify/${id}`);
    dispatch("getAllUsers");
  },

  async unVerifyUser({ dispatch }: IDispatch, id: string) {
    await axios.patch(`${baseApi}/user/unverify/${id}`);
    dispatch("getAllUsers");
  },

  async suspendUser({ dispatch }: IDispatch, id: string) {
    await axios.patch(`${baseApi}/user/suspend/${id}`);
    dispatch("getAllUsers");
  },

  async unSuspendUser({ dispatch }: IDispatch, id: string) {
    await axios.patch(`${baseApi}/user/unsuspend/${id}`);
    dispatch("getAllUsers");
  },
};
