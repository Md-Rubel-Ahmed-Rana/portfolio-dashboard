import { IAboutSection, IBannerSection } from "./../types/home.type";
import { ICommit, IDispatch } from "./../types/vuex.types";
import axios from "axios";
const baseApi = process.env.VUE_APP_BASE_API;

export const utilApis = {
  async getCards({ commit }: ICommit) {
    const res = await axios.get(`${baseApi}/util/cards`);
    commit("setCards", res?.data?.data);
  },
  async initiateHome({ commit }: ICommit) {
    await axios.post(`${baseApi}/util/initiate`);
  },
  async getHomeData({ commit }: ICommit) {
    const res = await axios.get(`${baseApi}/util`);
    commit("setHomeData", res?.data?.data);
  },
  async updateBannerData(
    { dispatch }: IDispatch,
    { id, data }: { id: string; data: IBannerSection }
  ) {
    await axios.patch(`${baseApi}/util/banner-content/${id}`, {
      bannerSection: { ...data },
    });
  },
  async updateAboutData(
    { dispatch }: IDispatch,
    { id, data }: { id: string; data: IAboutSection }
  ) {
    await axios.patch(`${baseApi}/util/about-content/${id}`, {
      aboutSection: { ...data },
    });
  },
};
