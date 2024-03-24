import AddNewCourse from "@/components/courses/AddNewCourse.vue";
import Courses from "@/components/courses/Courses.vue";
import EditCourse from "@/components/courses/EditCourse.vue";
import { RouteRecordRaw } from "vue-router";

export const courseRoutes: Array<RouteRecordRaw> = [
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
];
