import { useEmployeeContext } from "../hooks/useEmployeeContext";


function EmployeeInfo () {
  const { employee } = useEmployeeContext();

  return (
    <>
    {
      employee && (<div>
        <h1 className="text-2xl font-medium text-gray-700">
          {employee.firstName} {employee.lastName}
        </h1>
  
        <h3 className="mt-3">
          <span className="text-lg font-medium text-gray-700">Employee ID: </span>
          <span className="text-lg text-gray-700">{employee.id}</span>
        </h3>
        <h3>
          <span className="text-lg font-medium text-gray-700">Department: </span>
          <span className="text-lg text-gray-700">{employee.department.name}</span>
        </h3>
        <h3>
          <span className="text-lg font-medium text-gray-700">Telefone: </span>
          <span className="text-lg text-gray-700">{employee.phone}</span>
        </h3>
        <h3>
          <span className="text-lg font-medium text-gray-700">Address: </span>
          <span className="text-lg text-gray-700">{employee.address}</span>
        </h3>
      </div>)
    }
    </>
  )
}

export default EmployeeInfo;