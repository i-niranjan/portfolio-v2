import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getAllBlog = async () => {
  try {
    const res = await axios.get(`${API_URL}api/blogs?populate=*`);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("Axios error:", error.message);
      console.log("Status:", error.response?.status);
      console.log("Response data:", error.response?.data);
    } else {
      console.log("Unknown error:", error);
    }
  }
};
export const getSingleBlog = async (slug) => {
  try {
    const res = await axios.get(
      `${API_URL}api/blogs?filters[slug][$eq]=${slug}&populate=*`
    );
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("Axios error:", error.message);
      console.log("Status:", error.response?.status);
      console.log("Response data:", error.response?.data);
    } else {
      console.log("Unknown error:", error);
    }
  }
};
