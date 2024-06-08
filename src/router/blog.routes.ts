import Blogs from "@/components/blogs/Blogs.vue";
import { RouteRecordRaw } from "vue-router";

export const blogRoutes: Array<RouteRecordRaw> = [
  {
    path: "/dashboard/blogs",
    name: "Blogs",
    component: Blogs,
  },
];
