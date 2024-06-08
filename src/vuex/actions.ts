import { userApi } from "./../api/user.api";
import { experienceApi } from "./../api/experience.api";
import { educationApi } from "./../api/education.api";
import { courseApi } from "./../api/courses.api";
import { fileUploadApis } from "./../api/fileUpload.api";
import { homeApis } from "../api/home.api";
import { projectApis } from "./../api/projects.api";
import { updateApi } from "@/api/update.api";
import { serviceApi } from "@/api/service.api";
import { commentApi } from "@/api/comment.api";
import { feedbackApi } from "@/api/feedback.api";
import { blogApi } from "@/api/blog.api";

export const actions = {
  ...userApi,
  ...projectApis,
  ...homeApis,
  ...fileUploadApis,
  ...courseApi,
  ...educationApi,
  ...experienceApi,
  ...updateApi,
  ...serviceApi,
  ...commentApi,
  ...feedbackApi,
  ...blogApi,
};
