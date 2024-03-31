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
};
