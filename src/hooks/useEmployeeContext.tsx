import { useContext } from "react";
import { AppEmployeeContext } from "../context/AppEmployeeContext";

export const useEmployeeContext = () => {
  const context = useContext(AppEmployeeContext);
  if (context === undefined) {
    throw new Error('useEmployeeContext must be used within an AppEmployeeProvider');
  }
  return context;
};