import router from "@/router";
import {
  IAboutSection,
  IBannerSection,
  ISocialLinks,
} from "../types/home.type";
import { ICommit, IDispatch } from "../types/vuex.types";
import axios from "axios";
import { authHeader, baseApi } from ".";

export const homeApis = {
  async getCards({ commit }: ICommit) {
    const res = await axios.get(`${baseApi}/home/cards`, {
      headers: authHeader,
    });
    commit("setCards", res?.data?.data);
  },
  async initiateHome({ commit }: ICommit) {
    await axios.post(`${baseApi}/home/initiate`, { headers: authHeader });
  },
  async getHomeData({ commit }: ICommit) {
    const res = await axios.get(`${baseApi}/home`, { headers: authHeader });
    commit("setHomeData", res?.data?.data);
  },
  async updateBannerData(
    { dispatch }: IDispatch,
    { id, data }: { id: string; data: IBannerSection }
  ) {
    await axios.patch(`${baseApi}/home/banner-content/${id}`, {
      headers: authHeader,
      bannerSection: { ...data },
    });
    dispatch("setHomeData");
    router.push("/dashboard/homes");
  },
  async updateAboutData(
    { dispatch }: IDispatch,
    { id, data }: { id: string; data: IAboutSection }
  ) {
    await axios.patch(`${baseApi}/home/about-content/${id}`, {
      headers: authHeader,
      aboutSection: { ...data },
    });
    dispatch("setHomeData");
    router.push("/dashboard/homes");
  },
  async updateSkillsData(
    { dispatch }: IDispatch,
    { id, data }: { id: string; data: string[] }
  ) {
    await axios.patch(
      `${baseApi}/home/update/skills/${id}`,
      { skills: data },
      { headers: authHeader }
    );
    dispatch("setHomeData");
    router.push("/dashboard/homes");
  },
  async updateSocialLinksData(
    { dispatch }: IDispatch,
    { id, data }: { id: string; data: ISocialLinks[] }
  ) {
    await axios.patch(
      `${baseApi}/home/update/social-links/${id}`,
      { socialLinks: data },
      { headers: authHeader }
    );
    dispatch("setHomeData");
    router.push("/dashboard/homes");
  },
  async updateSkillIcons(
    { dispatch }: IDispatch,
    { id, data }: { id: string; data: any }
  ) {
    await axios.patch(
      `${baseApi}/home/update/skill-icons/${id}`,
      { skillIcons: data },
      { headers: authHeader }
    );
    dispatch("setHomeData");
    router.push("/dashboard/homes");
  },
};
