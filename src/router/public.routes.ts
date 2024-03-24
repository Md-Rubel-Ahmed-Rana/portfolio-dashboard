import LoginForm from "@/components/auth/LoginForm.vue";
import RegisterForm from "@/components/auth/RegisterForm.vue";
import HomePage from "@/components/home/HomePage.vue";
import { RouteRecordRaw } from "vue-router";

export const publicRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterForm,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginForm,
  },
];
