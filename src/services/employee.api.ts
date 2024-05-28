import axios from "axios";
import { Employee } from "./../context/AppEmployeeContext";

const api = axios.create({
  baseURL: `${
    process.env.REACT_APP_API_URL ?? "http://localhost:5000"
  }/employee`
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

export const getEmployeeById = async (id: string) => {
  try {
    const response = await api.get(`/${id}`);
    return response.data;
  } catch (error: any) {
    console.log("Error fetching Employee: ", error.message);
    return null;
  }
};

export const updateEmployee = async (
  id: string,
  employee: Partial<Employee>
) => {
  try {
    const response = await api.put(`/${id}`, employee);
    return response.data;
  } catch (error: any) {
    console.log("Error fetching Employee: ", error.message);
    return null;
  }
};

export const saveEmployee = async (employee: Partial<Employee>) => {
  try {
    const response = await api.post("/", employee);
    return response.data;
  } catch (error: any) {
    console.log("Error fetching Employee: ", error.message);
    return null;
  }
};

export const createEmployee = async () => {
  try {
    const response = await api.post(`/create-faker-employee`);
    return response.data;
  } catch (error: any) {
    console.log("Error fetching Employee: ", error.message);
    return null;
  }
};
