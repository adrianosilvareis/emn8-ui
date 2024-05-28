import { calculateDuration } from "../helper/calculate-duration";
import { formatDate } from "../helper/format-date";
import { useEmployeeContext } from "../hooks/useEmployeeContext";


function EmployeeHireDisplay () {
  const { employee, onUpdateEmployeeDetails } = useEmployeeContext();
  
  if(!employee) return null;

  const onDeactivateStatus = () => {
    onUpdateEmployeeDetails(employee.id, { active: false })
  }

  const onActivateStatus = () => {
    onUpdateEmployeeDetails(employee.id, { active: true })
  }

  return (
    <>
      <h1 className="text-2xl font-medium text-gray-700">
        Hire Date
      </h1>
      <h3 className="text-lg text-gray-700">
        {formatDate(new Date(employee.hireDate))}
      </h3>
      <h3 className="text-lg text-gray-700">
        {calculateDuration(new Date(employee.hireDate))}
      </h3>

      { employee.active ? (
        <button className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded float-right ml-4 h-10" onClick={onDeactivateStatus}>
          Deactivate
        </button>
      ) : (
        <button className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded float-right ml-4 h-10" onClick={onActivateStatus}>
          Activate
        </button>
      ) }
    </>
  )
}

export default EmployeeHireDisplay;