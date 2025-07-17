import axios from "./axiosInstance";

export const fetchProducts = async () => {
  const response = await axios.get(`/product/`);
  return response.data;
};
