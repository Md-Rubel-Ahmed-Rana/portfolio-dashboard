import AddNewProject from "@/components/projects/AddNewProject.vue";
import EditProject from "@/components/projects/EditProject.vue";
import ProjectDetails from "@/components/projects/ProjectDetails.vue";
import Projects from "@/components/projects/Projects.vue";
import { RouteRecordRaw } from "vue-router";

export const projectRoutes: Array<RouteRecordRaw> = [
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
];
