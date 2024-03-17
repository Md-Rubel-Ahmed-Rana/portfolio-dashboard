import Courses from "@/components/Courses.vue";
import DashboardCards from "@/components/DashboardCards.vue";
import Educations from "@/components/Educations.vue";
import Experiences from "@/components/Experiences.vue";
import HomePage from "@/components/HomePage.vue";
import LoginForm from "@/components/LoginForm.vue";
import Projects from "@/components/Projects.vue";
import RegisterForm from "@/components/RegisterForm.vue";
import Services from "@/components/Services.vue";
import DashboardLayout from "@/layout/DashboardLayout.vue";
import PublicLayout from "@/layout/PublicLayout.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: PublicLayout,
    children: [
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
    ],
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: DashboardCards,
  },
  {
    path: "/dashboard",
    name: "DynamicRoutes",
    component: DashboardLayout,
    children: [
      {
        path: "/dashboard/projects",
        name: "Projects",
        component: Projects,
      },
      {
        path: "/dashboard/services",
        name: "Services",
        component: Services,
      },
      {
        path: "/dashboard/educations",
        name: "Educations",
        component: Educations,
      },
      {
        path: "/dashboard/experiences",
        name: "Experiences",
        component: Experiences,
      },
      {
        path: "/dashboard/courses",
        name: "Courses",
        component: Courses,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
