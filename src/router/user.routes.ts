import AddNewUser from "@/components/users/AddNewUser.vue";
import UpdateUser from "@/components/users/UpdateUser.vue";
import Users from "@/components/users/Users.vue";
import { RouteRecordRaw } from "vue-router";

export const userRoutes: Array<RouteRecordRaw> = [
  {
    path: "/dashboard/users",
    name: "Users",
    component: Users,
  },
  {
    path: "/dashboard/users/add-new-user",
    name: "AddNewUser",
    component: AddNewUser,
  },
  {
    path: "/dashboard/users/user/edit/:id",
    name: "UpdateUser",
    component: UpdateUser,
    props: true,
  },
];
