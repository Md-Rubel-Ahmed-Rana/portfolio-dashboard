import { fileUploadApis } from "./../api/fileUpload.api";
import { utilApis } from "./../api/util.api";
import { projectApis } from "./../api/projects.api";

export const actions = {
  ...projectApis,
  ...utilApis,
  ...fileUploadApis,
};
