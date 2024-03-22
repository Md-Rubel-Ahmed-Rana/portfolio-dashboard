import { ICommit } from "./../types/vuex.types";
import axios from "axios";
const cloudinaryApi =
  process.env.VUE_APP_CLOUDINARY_API ||
  "https://cloudinary-file-uploader.onrender.com";

export const fileUploadApis = {
  async uploadSingleImage({ commit }: ICommit, image: File) {
    const formData = new FormData();
    formData.append("image", image);
    const res = await axios.post(
      `${cloudinaryApi}/cloudinary/single-image`,
      formData
    );
    return { url: res?.data?.data };
  },
  async uploadMultipleImage({ commit }: ICommit, images: FileList) {
    const formData = new FormData();
    Array.from(images).forEach((file) => {
      formData.append("images", file);
    });
    await axios.post(`${cloudinaryApi}/cloudinary/multiple-image`);
  },
};
