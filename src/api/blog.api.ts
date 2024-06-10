import { ICommit, IDispatch } from "@/types/vuex.types";
import axios from "axios";
import { authHeader, baseApi } from ".";
import { IBlog } from "@/types/blog.interface";
import router from "@/router";

export const blogApi = {
  async getBlogs({ commit }: ICommit) {
    const res = await axios.get(`${baseApi}/blog`, { headers: authHeader });
    commit("setBlogs", res?.data?.data);
  },
  async getSingleBlog({ commit }: ICommit, { id }: { id: string }) {
    const res = await axios.get(`${baseApi}/blog/single/${id}`, {
      headers: authHeader,
    });
    commit("setBlog", res?.data?.data);
  },
  async addNewBlog({ dispatch }: IDispatch, { payload }: { payload: IBlog }) {
    await axios.post(`${baseApi}/blog/add`, payload, { headers: authHeader });
    dispatch("getBlogs");
    router.push("/dashboard/blogs");
  },
  async deleteBlog({ dispatch }: IDispatch, { id }: { id: string }) {
    await axios.delete(`${baseApi}/blog/delete/${id}`, { headers: authHeader });
    dispatch("getBlogs");
  },
  async updateBlog(
    { dispatch }: IDispatch,
    { id, payload }: { id: string; payload: IBlog }
  ) {
    await axios.patch(`${baseApi}/blog/update/${id}`, payload, {
      headers: authHeader,
    });
    dispatch("getBlogs");
    router.push("/dashboard/blogs");
  },
};
