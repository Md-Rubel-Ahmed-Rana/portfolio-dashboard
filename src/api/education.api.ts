import axios from "axios";
import { ICommit, IDispatch } from "./../types/vuex.types";
import router from "@/router";
import { ICourse } from "@/types/course.type";
const baseApi = process.env.VUE_APP_BASE_API;

export const educationApi = {
  async getEducations({ commit }: ICommit) {
    const res = await axios.get(`${baseApi}/education`);
    commit("setEducations", res.data.data);
  },
  async getEducation({ commit }: ICommit, id: string) {
    const res = await axios.get(`${baseApi}/education/single/${id}`);
    commit("setEducation", res.data.data);
  },
  async updateEducation(
    { dispatch }: IDispatch,
    { courseId, updatedData }: { courseId: string; updatedData: ICourse }
  ) {
    await axios.patch(`${baseApi}/education/update/${courseId}`, updatedData);
    router.push("/dashboard/educations");
  },
};
