import axios from "axios";

const api = axios.create({
  baseURL: `${
    process.env.REACT_APP_API_URL ?? "http://localhost:5000"
  }/department`
});

export const getAllDepartment = async () => {
  try {
    const response = await api.get("/get-all");
    return response.data;
  } catch (error: any) {
    console.log("Error fetching departments: ", error.message);
    return [];
  }
};
