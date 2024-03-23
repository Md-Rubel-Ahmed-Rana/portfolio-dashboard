import { educationApi } from "./../api/education.api";
import { courseApi } from "./../api/courses.api";
import { fileUploadApis } from "./../api/fileUpload.api";
import { utilApis } from "./../api/util.api";
import { projectApis } from "./../api/projects.api";

export const actions = {
  ...projectApis,
  ...utilApis,
  ...fileUploadApis,
  ...courseApi,
  ...educationApi,
};
