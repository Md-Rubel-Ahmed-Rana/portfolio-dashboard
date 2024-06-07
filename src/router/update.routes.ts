import Updates from "@/components/updates/Updates.vue";
import { RouteRecordRaw } from "vue-router";

export const updateRoutes: Array<RouteRecordRaw> = [
  {
    path: "/dashboard/updates",
    name: "Updates",
    component: Updates,
  },
];
