import { useState } from "react";
import { useDepartmentContext } from "../hooks/useDepartmentContext";
import { useEmployeeContext } from "../hooks/useEmployeeContext";

type EmployeeProps = {
  firstName: string,
  lastName: string,
  phone: string,
  address: string,
  departmentId: string
}

function EmployeeAdd() {
  const { departments } = useDepartmentContext();
  const { onSaveEmployee } = useEmployeeContext();

  const [formData, setFormData] = useState<EmployeeProps>({
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    departmentId: ''
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const onSave = () => {
    onSaveEmployee(formData);
  }

  return (
    <div className="w-full h-full flex">
      <div>
        <h1 className="text-xl font-medium text-gray-700 mb-8">New Employee</h1>
        <div>
          <label className="block text-lg font-medium text-gray-700">First Name:</label>
          <input type="text" className="border border-gray-300 rounded-md p-2 w-80 block"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-700">Last Name:</label>
          <input type="text" className="border border-gray-300 rounded-md p-2 w-80 block"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-700">Telephone:</label>
          <input type="text" className="border border-gray-300 rounded-md p-2 w-80 block"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-700">Address:</label>
          <input type="text" className="border border-gray-300 rounded-md p-2 w-80 block"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-700">Department</label>
          <select className="p-2 border border-gray-300 rounded-md w-80"
            id="departmentId"
            name="departmentId"
            value={formData.departmentId}
            onChange={handleChange}>
            {departments.map((department, index) => (
              <option value={department.id} key={index}>{department.name}</option>
            ))}
          </select>
        </div>

        <button className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded float-right ml-4 h-10" onClick={onSave}>
          save
        </button>
      </div>
    </div>
  );
}

export default EmployeeAdd;
