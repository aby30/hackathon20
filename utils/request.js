import axios from "axios";

export const getApiUrl = (req) => {
  return req ? `${req.protocol}://${req.headers.host}` : "";
};

export const get = async (url, req, options = {}) => {
  return await axios.get(`${getApiUrl(req)}/api${url}`, options);
};

export default axios;
