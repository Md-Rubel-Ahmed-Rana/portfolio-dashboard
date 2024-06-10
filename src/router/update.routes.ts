import Updates from "@/components/updates/Updates.vue";
import AddUpdate from "@/components/updates/AddUpdate.vue";
import EditUpdate from "@/components/updates/EditUpdate.vue";
import { RouteRecordRaw } from "vue-router";

export const updateRoutes: Array<RouteRecordRaw> = [
  {
    path: "/dashboard/updates",
    name: "Updates",
    component: Updates,
  },
  {
    path: "/dashboard/updates/add-new-update",
    name: "Add New Update",
    component: AddUpdate,
  },
  {
    path: "/dashboard/updates/edit/:id",
    name: "Edit Update",
    component: EditUpdate,
    props: true,
  },
];
