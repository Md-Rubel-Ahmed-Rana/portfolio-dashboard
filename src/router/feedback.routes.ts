import Feedbacks from "@/components/feedbacks/Feedbacks.vue";
import { RouteRecordRaw } from "vue-router";

export const feedbackRoutes: Array<RouteRecordRaw> = [
  {
    path: "/dashboard/feedbacks",
    name: "Feedbacks",
    component: Feedbacks,
  },
];
