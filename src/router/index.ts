import DashboardCards from "@/components/utils/DashboardCards.vue";
import DashboardLayout from "@/layout/DashboardLayout.vue";
import PublicLayout from "@/layout/PublicLayout.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { educationRoutes } from "./education.routes";
import { projectRoutes } from "./project.routes";
import { experienceRoutes } from "./experience.routes";
import { courseRoutes } from "./course.routes";
import { utilRoutes } from "./util.routes";
import { serviceRoutes } from "./service.routes";
import { publicRoutes } from "./public.routes";
import { userRoutes } from "./user.routes";
import { updateRoutes } from "./update.routes";

const dashboardChildrenRoutes: Array<RouteRecordRaw> = [];

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: PublicLayout,
    children: publicRoutes,
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
    children: dashboardChildrenRoutes.concat(
      educationRoutes,
      projectRoutes,
      experienceRoutes,
      courseRoutes,
      utilRoutes,
      serviceRoutes,
      userRoutes,
      updateRoutes
    ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
