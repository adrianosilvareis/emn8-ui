import { useDepartmentContext } from "../hooks/useDepartmentContext";
import { useEmployeeContext } from "../hooks/useEmployeeContext";

  function EmployeeHistory() {
    const { employee } = useEmployeeContext();
    const { departments } = useDepartmentContext();

    const getNameById = (id: string) => departments.find(department => department.id === id)?.name || '';

    if (!employee) {
      return null;
    }

    return (
      <div className="mt-10">
        <h1 className="text-2xl font-medium text-gray-600 my-4">Department History</h1>
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 border border-slate-300">Date</th>
              <th className="px-4 py-2 border border-slate-300">Department</th>
            </tr>
          </thead>
          <tbody>
          {employee.employeeHistory.map((history, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{new Date(history.startDate).toLocaleDateString('en')}</td>
              <td className="border px-4 py-2">{getNameById(history.departmentId)}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    );
  }

  export default EmployeeHistory;