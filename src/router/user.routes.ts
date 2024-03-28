import Users from "@/components/users/Users.vue";
import { RouteRecordRaw } from "vue-router";

export const userRoutes: Array<RouteRecordRaw> = [
  {
    path: "/dashboard/users",
    name: "Users",
    component: Users,
  },
];
