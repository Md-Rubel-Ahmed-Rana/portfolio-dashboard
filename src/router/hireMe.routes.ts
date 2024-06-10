import HireMes from "@/components/hireMe/HireMes.vue";
import { RouteRecordRaw } from "vue-router";

export const hireMeRoutes: Array<RouteRecordRaw> = [
  {
    path: "/dashboard/hiremes",
    name: "Hire Me Page",
    component: HireMes,
  },
];
