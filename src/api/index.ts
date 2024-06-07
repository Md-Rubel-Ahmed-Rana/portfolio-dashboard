const environment = process.env.VUE_APP_NODE_ENV;
const devApi = process.env.VUE_APP_BASE_API_DEV;
const prodApi = process.env.VUE_APP_BASE_API_PROD;

export const accessKey = process.env.VUE_APP_API_ACCESS_KEY;

export const authHeader = {
  authorization: accessKey,
};

export const baseApi = environment === "development" ? devApi : prodApi;
