import EditExperience from "@/components/experiences/EditExperience.vue";
import ExperienceDetails from "@/components/experiences/ExperienceDetails.vue";
import Experiences from "@/components/experiences/Experiences.vue";
import AddNewExperience from "@/components/experiences/AddNewExperience.vue";
import { RouteRecordRaw } from "vue-router";

export const experienceRoutes: Array<RouteRecordRaw> = [
  {
    path: "/dashboard/experiences",
    name: "Experiences",
    component: Experiences,
  },
  {
    path: "/dashboard/experiences/:id",
    name: "ExperienceDetails",
    component: ExperienceDetails,
    props: true,
  },
  {
    path: "/dashboard/experiences/edit/:id",
    name: "EditExperience",
    component: EditExperience,
    props: true,
  },
  {
    path: "/dashboard/experiences/add-new-experience",
    name: "AddNewExperience",
    component: AddNewExperience,
  },
];
