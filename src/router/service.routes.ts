import AddService from "@/components/services/AddService.vue";
import EditService from "@/components/services/EditService.vue";
import Services from "@/components/services/Services.vue";
import { RouteRecordRaw } from "vue-router";

export const serviceRoutes: Array<RouteRecordRaw> = [
  {
    path: "/dashboard/services",
    name: "Services",
    component: Services,
  },
  {
    path: "/dashboard/services/add-new-service",
    name: "Add New Services",
    component: AddService,
  },
  {
    path: "/dashboard/services/edit/:id",
    name: "Edit Service",
    component: EditService,
    props: true,
  },
];
