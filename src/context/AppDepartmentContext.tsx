import { createContext, useEffect, useState } from "react";
import { getAllDepartment } from "../services/department.api";

export type Department = {
  id: string;
  name: string;
};

type AppContextType = {
  departments: Department[];
};

export const AppDepartmentContext = createContext({} as AppContextType);

export function AppDepartmentProvider({ children }: { children: React.ReactNode }) {
  const [departments, setDepartments] = useState<Department[]>([]);

  useEffect(() => {
    const fetchDepartment = async () => {
      const data = await getAllDepartment();
      setDepartments(data);
    };

    fetchDepartment();
  }, []);

  return (
    <AppDepartmentContext.Provider value={{ departments }}>{children}</AppDepartmentContext.Provider>
  );
}