import EditAbout from "@/components/home/EditAbout.vue";
import EditBanner from "@/components/home/EditBanner.vue";
import EditSkills from "@/components/home/EditSkills.vue";
import EditSocialLinks from "@/components/home/EditSocialLinks.vue";
import UtilPage from "@/components/home/UtilPage.vue";
import { RouteRecordRaw } from "vue-router";

export const utilRoutes: Array<RouteRecordRaw> = [
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
];
