import { createContext, useEffect, useState } from "react";
import { getAllEmployee } from "../services/employee.api";
import { Department } from "./AppDepartmentContext";

export type Employee = {
  id: string;
  firstName: string;
  lastName: string;
  hireDate: Date;
  department: Department;
  phone?: string;
  address?: string;
  history: EmployeeHistory[];
};

export type EmployeeHistory = {
  departmentName: string;
  startDate: Date;
};

type AppContextType = {
  employees: Employee[];
};

export const AppEmployeeContext = createContext({} as AppContextType);

export function AppEmployeeProvider({ children }: { children: React.ReactNode }) {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    const fetchEmployee = async () => {
      const data = await getAllEmployee();
      setEmployees(data);
    };

    fetchEmployee();
  }, []);

  return (
    <AppEmployeeContext.Provider value={{ employees }}>{children}</AppEmployeeContext.Provider>
  );
}