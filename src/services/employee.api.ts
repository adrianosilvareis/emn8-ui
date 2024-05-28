import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/employee"
});

export const getAllEmployee = async () => {
  try {
    const response = await api.get("/get-all");
    return response.data;
  } catch (error: any) {
    console.log("Error fetching Employees: ", error.message);
    return [];
  }
};
