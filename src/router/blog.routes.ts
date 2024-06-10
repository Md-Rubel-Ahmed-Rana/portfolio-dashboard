import Blogs from "@/components/blogs/Blogs.vue";
import AddBlog from "@/components/blogs/AddBlog.vue";
import EditBlog from "@/components/blogs/EditBlog.vue";
import { RouteRecordRaw } from "vue-router";

export const blogRoutes: Array<RouteRecordRaw> = [
  {
    path: "/dashboard/blogs",
    name: "Blogs",
    component: Blogs,
  },
  {
    path: "/dashboard/blogs/add-new-blog",
    name: "Add New Blog",
    component: AddBlog,
  },
  {
    path: "/dashboard/blogs/edit/:id",
    name: "Edit Blog",
    component: EditBlog,
    props: true,
  },
];
