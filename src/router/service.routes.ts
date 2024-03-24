import Services from "@/components/services/Services.vue";
import { RouteRecordRaw } from "vue-router";

export const serviceRoutes: Array<RouteRecordRaw> = [
  {
    path: "/dashboard/services",
    name: "Services",
    component: Services,
  },
];
