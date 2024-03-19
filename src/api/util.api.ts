import axios from "axios";
const baseApi = process.env.BASE_API || "http://localhost:5002/api/v2";

export const utilApis = {
  async getCards({ commit }: any) {
    const res = await axios.get(`${baseApi}/util/cards`);
    commit("setCards", res?.data?.data);
  },
};
