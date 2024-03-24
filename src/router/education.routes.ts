import Educations from "@/components/educations/Educations.vue";
import { RouteRecordRaw } from "vue-router";

export const educationRoutes: Array<RouteRecordRaw> = [
  {
    path: "/dashboard/educations",
    name: "Educations",
    component: Educations,
  },
];
