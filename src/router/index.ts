import LoginForm from "@/components/auth/LoginForm.vue";
import RegisterForm from "@/components/auth/RegisterForm.vue";
import Courses from "@/components/courses/Courses.vue";
import Educations from "@/components/educations/Educations.vue";
import Experiences from "@/components/experiences/Experiences.vue";
import HomePage from "@/components/home/HomePage.vue";
import EditProject from "@/components/projects/EditProject.vue";
import AddNewProject from "@/components/projects/AddNewProject.vue";
import ProjectDetails from "@/components/projects/ProjectDetails.vue";
import Projects from "@/components/projects/Projects.vue";
import Services from "@/components/services/Services.vue";
import DashboardCards from "@/components/utils/DashboardCards.vue";
import DashboardLayout from "@/layout/DashboardLayout.vue";
import PublicLayout from "@/layout/PublicLayout.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import UtilPage from "@/components/home/UtilPage.vue";
import EditBanner from "@/components/home/EditBanner.vue";
import EditAbout from "@/components/home/EditAbout.vue";
import EditSkills from "@/components/home/EditSkills.vue";
import EditSocialLinks from "@/components/home/EditSocialLinks.vue";
import EditCourse from "@/components/courses/EditCourse.vue";
import AddNewCourse from "@/components/courses/AddNewCourse.vue";

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
        path: "/dashboard/projects/add-new-project",
        name: "NewProject",
        component: AddNewProject,
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
      {
        path: "/dashboard/courses/edit/:id",
        name: "EditCourse",
        component: EditCourse,
        props: true,
      },
      {
        path: "/dashboard/courses/add-new-course",
        name: "AddNewCourse",
        component: AddNewCourse,
      },
      {
        path: "/dashboard/utils",
        name: "Utils",
        component: UtilPage,
      },
      {
        path: "/dashboard/utils/banner-content/edit",
        name: "BannerSection",
        component: EditBanner,
      },
      {
        path: "/dashboard/utils/about-content/edit",
        name: "AboutSection",
        component: EditAbout,
      },
      {
        path: "/dashboard/utils/skills-content/edit",
        name: "SkillsSection",
        component: EditSkills,
      },
      {
        path: "/dashboard/utils/social-links-content/edit",
        name: "SocialLinksSection",
        component: EditSocialLinks,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
