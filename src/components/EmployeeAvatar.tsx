import { useEmployeeContext } from "../hooks/useEmployeeContext";

function EmployeeAvatar () {
  const { employee } = useEmployeeContext();
  
  if (!employee) return null;

  return (
    <div className="size-64 m-2 bg-cyan-300 content-end">
      { !employee.active ? (<div className="bg-orange-500 w-11/12 mx-auto mb-2 p-1 text-center text-white">Inactive</div>) : null }
    </div>
  )
}

export default EmployeeAvatar;