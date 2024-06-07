import { userApi } from "./../api/user.api";
import { experienceApi } from "./../api/experience.api";
import { educationApi } from "./../api/education.api";
import { courseApi } from "./../api/courses.api";
import { fileUploadApis } from "./../api/fileUpload.api";
import { homeApis } from "../api/home.api";
import { projectApis } from "./../api/projects.api";
import { updateApi } from "@/api/update.api";

export const actions = {
  ...userApi,
  ...projectApis,
  ...homeApis,
  ...fileUploadApis,
  ...courseApi,
  ...educationApi,
  ...experienceApi,
  ...updateApi,
};
