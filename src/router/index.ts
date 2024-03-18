import LoginForm from "@/components/auth/LoginForm.vue";
import RegisterForm from "@/components/auth/RegisterForm.vue";
import Courses from "@/components/courses/Courses.vue";
import Educations from "@/components/educations/Educations.vue";
import Experiences from "@/components/experiences/Experiences.vue";
import HomePage from "@/components/home/HomePage.vue";
import EditProject from "@/components/projects/EditProject.vue";
import ProjectDetails from "@/components/projects/ProjectDetails.vue";
import Projects from "@/components/projects/Projects.vue";
import Services from "@/components/services/Services.vue";
import DashboardCards from "@/components/utils/DashboardCards.vue";
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
        path: "/dashboard/projects/:id",
        name: "ProjectsDetails",
        component: ProjectDetails,
        props: true,
      },
      {
        path: "/dashboard/projects/edit/:id",
        name: "ProjectsEdit",
        component: EditProject,
        props: true,
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
