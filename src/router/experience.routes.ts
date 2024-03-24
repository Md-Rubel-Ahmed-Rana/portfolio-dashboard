import Experiences from "@/components/experiences/Experiences.vue";
import { RouteRecordRaw } from "vue-router";

export const experienceRoutes: Array<RouteRecordRaw> = [
  {
    path: "/dashboard/experiences",
    name: "Experiences",
    component: Experiences,
  },
];
