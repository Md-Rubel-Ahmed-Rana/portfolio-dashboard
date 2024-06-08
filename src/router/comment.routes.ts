import Comments from "@/components/comments/Comments.vue";
import { RouteRecordRaw } from "vue-router";

export const commentRoutes: Array<RouteRecordRaw> = [
  {
    path: "/dashboard/comments",
    name: "Comments",
    component: Comments,
  },
];
