import axios from "axios";
const baseApi = process.env.VUE_APP_BASE_API;

export const utilApis = {
  async getCards({ commit }: any) {
    const res = await axios.get(`${baseApi}/util/cards`);
    commit("setCards", res?.data?.data);
  },
};
