import { createContext, useCallback, useState } from "react";
import { getAllEmployee, getEmployeeById, saveEmployee, updateEmployee } from "../services/employee.api";
import { Department } from "./AppDepartmentContext";

export type Employee = {
  id: string;
  firstName: string;
  lastName: string;
  hireDate: Date;
  department: Department;
  phone?: string;
  address?: string;
  employeeHistory: EmployeeHistory[];
  active: boolean;
};

export type EmployeeHistory = {
  departmentId: string;
  startDate: Date;
};

type AppContextType = {
  employees: Employee[];
  employee: Employee | null,
  onGetEmployeeDetails: (id: string) => void,
  onUpdateEmployeeDetails: (id: string, employee: Partial<Employee>) => void,
  onSaveEmployee: (employee: Partial<Employee>) => void,
  onFetchEmployee: () => void
};

export const AppEmployeeContext = createContext({} as AppContextType);

export function AppEmployeeProvider({ children }: { children: React.ReactNode }) {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [employee, setEmployee] = useState<Employee | null>(null);

  const onGetEmployeeDetails = useCallback(async (id: string) => {
    const data = await getEmployeeById(id);
    setEmployee(data);
  }, []);

  const onUpdateEmployeeDetails = useCallback(async (id: string, body: Partial<Employee>) => {
    const data = await updateEmployee(id, body);
    setEmployee(data);
  }, []);

  const onSaveEmployee = useCallback(async (employee: Partial<Employee>) => {
    const data = await saveEmployee(employee);
    setEmployee(data);
  }, []);

  const onFetchEmployee = useCallback(async () => {
    const data = await getAllEmployee();
    setEmployees(data);
  }, []);

  return (
    <AppEmployeeContext.Provider value={{
      employees,
      employee,
      onGetEmployeeDetails,
      onUpdateEmployeeDetails,
      onSaveEmployee,
      onFetchEmployee
    }}>{children}</AppEmployeeContext.Provider>
  );
}