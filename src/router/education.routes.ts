import AddNewEducation from "@/components/educations/AddNewEducation.vue";
import EditEducation from "@/components/educations/EditEducation.vue";
import Educations from "@/components/educations/Educations.vue";
import { RouteRecordRaw } from "vue-router";

export const educationRoutes: Array<RouteRecordRaw> = [
  {
    path: "/dashboard/educations",
    name: "Educations",
    component: Educations,
  },
  {
    path: "/dashboard/educations/edit/:id",
    name: "EditEducation",
    component: EditEducation,
    props: true,
  },
  {
    path: "/dashboard/educations/add-new-education",
    name: "AddNewEducation",
    component: AddNewEducation,
  },
];
