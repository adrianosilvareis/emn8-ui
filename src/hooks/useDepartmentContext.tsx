import { useContext } from "react";
import { AppDepartmentContext } from "../context/AppDepartmentContext";

export const useDepartmentContext = () => {
  const context = useContext(AppDepartmentContext);
  if (context === undefined) {
    throw new Error('useDepartmentContext must be used within an AppDepartmentProvider');
  }
  return context;
};