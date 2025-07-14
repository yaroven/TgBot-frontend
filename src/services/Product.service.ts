import axios from "axios";

const baseUrl = import.meta.env.VITE_API_BASE_URL;
export const fetchProducts = async () => {
  console.log(`${baseUrl}/product/`);
  const response = await axios.get(`${baseUrl}/product/`);
  return response.data;
};
