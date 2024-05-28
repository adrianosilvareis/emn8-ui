import { useEffect, useState } from "react";
import { useDepartmentContext } from "../hooks/useDepartmentContext";
import { useEmployeeContext } from "../hooks/useEmployeeContext";


function EmployeeForm () {
  const { departments } = useDepartmentContext();
  const { employee, onUpdateEmployeeDetails } = useEmployeeContext();

  const [selectValue, setSelectValue] = useState(employee?.department.id);

  useEffect(() => {
    setSelectValue(employee?.department.id);
  }, [employee]);
  
  const onUpdate = () => {
    if (!employee) return
    onUpdateEmployeeDetails(employee?.id, { department: { id: selectValue as string, name: '' } })
  }

  const onUpdateSelect = (data: any) => {
    setSelectValue(data.target.value);
  }
  
  return (
    <div className="mt-2">
      <label className="block text-lg font-medium text-gray-700">Update Department</label>
      <select className="p-2 border border-gray-300 rounded-md w-80" value={selectValue} onChange={onUpdateSelect}>
        {departments.map((department, index) => (
          <option value={department.id} key={index}>{department.name}</option>
        ))}
      </select>

      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded float-right ml-4 h-10" onClick={onUpdate}>
        update
      </button>
    </div>
  )
}

export default EmployeeForm;