import axios from "axios";
import { IUser } from "./../types/user.type";
import { ICommit } from "./../types/vuex.types";

const baseApi = process.env.VUE_APP_BASE_API;

export const userApi = {
  async registerUser({ commit }: ICommit, user: IUser) {
    const res = await axios.post(`${baseApi}/user/register`);
  },
  async loginUser(
    { commit }: ICommit,
    credentials: { email: string; password: string }
  ) {
    const res = await axios.post(`${baseApi}/user/login`, credentials);
  },
  async getAllUsers({ commit }: ICommit) {
    const res = await axios.get(`${baseApi}/user`);
    commit("setUsers", res?.data?.data);
  },
  async getSingleUser({ commit }: ICommit, id: string) {
    const res = await axios.get(`${baseApi}/user/single/${id}`);
  },
};
