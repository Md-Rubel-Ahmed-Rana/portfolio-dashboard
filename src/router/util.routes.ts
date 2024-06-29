import EditBanner from "@/components/home/EditBanner.vue";
import EditSkills from "@/components/home/EditSkills.vue";
import EditSocialLinks from "@/components/home/EditSocialLinks.vue";
import UtilPage from "@/components/home/UtilPage.vue";
import SkillIconsEdit from "@/components/home/SkillIconsEdit.vue";
import { RouteRecordRaw } from "vue-router";

export const utilRoutes: Array<RouteRecordRaw> = [
  {
    path: "/dashboard/homes",
    name: "Home Page",
    component: UtilPage,
  },
  {
    path: "/dashboard/homes/banner-content/edit",
    name: "BannerSection",
    component: EditBanner,
  },
  {
    path: "/dashboard/homes/skills-content/edit",
    name: "SkillsSection",
    component: EditSkills,
  },
  {
    path: "/dashboard/homes/skill-icons/edit",
    name: "Skills Icons",
    component: SkillIconsEdit,
  },
  {
    path: "/dashboard/homes/social-links-content/edit",
    name: "SocialLinksSection",
    component: EditSocialLinks,
  },
];
