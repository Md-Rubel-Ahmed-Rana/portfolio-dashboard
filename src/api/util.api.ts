import router from "@/router";
import {
  IAboutSection,
  IBannerSection,
  ISocialLinks,
} from "./../types/home.type";
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
    dispatch("setHomeData");
    router.push("/dashboard/utils");
  },
  async updateAboutData(
    { dispatch }: IDispatch,
    { id, data }: { id: string; data: IAboutSection }
  ) {
    await axios.patch(`${baseApi}/util/about-content/${id}`, {
      aboutSection: { ...data },
    });
    dispatch("setHomeData");
    router.push("/dashboard/utils");
  },
  async updateSkillsData(
    { dispatch }: IDispatch,
    { id, data }: { id: string; data: string[] }
  ) {
    await axios.patch(`${baseApi}/util/skills/${id}`, {
      skills: data,
    });
    dispatch("setHomeData");
    router.push("/dashboard/utils");
  },
  async updateSocialLinksData(
    { dispatch }: IDispatch,
    { id, data }: { id: string; data: ISocialLinks[] }
  ) {
    await axios.patch(`${baseApi}/util/social-links/${id}`, {
      socialLinks: data,
    });
    dispatch("setHomeData");
    router.push("/dashboard/utils");
  },
};
