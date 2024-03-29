import axios from "axios";
import { ICommit, IDispatch } from "./../types/vuex.types";
import router from "@/router";
import { ICourse } from "@/types/course.type";
const baseApi = process.env.VUE_APP_BASE_API;

export const courseApi = {
  async getCourses({ commit }: ICommit) {
    const res = await axios.get(`${baseApi}/course`);
    commit("setCourses", res.data.data);
  },
  async getCourse({ commit }: ICommit, id: string) {
    const res = await axios.get(`${baseApi}/course/single/${id}`);
    commit("setCourse", res.data.data);
  },
  async updateCourse(
    { dispatch }: IDispatch,
    { courseId, updatedData }: { courseId: string; updatedData: ICourse }
  ) {
    await axios.patch(`${baseApi}/course/update/${courseId}`, updatedData);
    router.push("/dashboard/courses");
  },
  async addNewCourse({ dispatch }: IDispatch, data: ICourse) {
    await axios.post(`${baseApi}/course/add/`, data);
    dispatch("getCourses");
    router.push("/dashboard/courses");
  },
  async deleteCourse({ dispatch }: IDispatch, id: string) {
    await axios.delete(`${baseApi}/course/delete/${id}`);
    dispatch("getCourses");
  },
};
