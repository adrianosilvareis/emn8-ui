import { useEffect, useState } from "react";
import ListItem from "../components/ListItem";
import Modal from "../components/Modal";
import { useEmployeeContext } from "../hooks/useEmployeeContext";
import EmployeeAdd from "./EmployeeAdd";
import EmployeeDetails from "./EmployeeDetails";

function EmployeeList() {
  const { employees, onFetchEmployee } = useEmployeeContext();

  const [isDetailModal, setIsDetailModal] = useState(false);
  const [isAddModal, setIsAddModal] = useState(false);

  useEffect(() => {
    onFetchEmployee()
  }, [onFetchEmployee])

  const openAddModal = () => {
    setIsAddModal(true);
  };

  const closeAddModal = () => {
    setIsAddModal(false)
  }
  const openDetailModal = () => {
    setIsDetailModal(true);
  };

  const closeDetailModal = () => {
    setIsDetailModal(false)
  }

  return (
    <div className="bg-gray-50 w-full h-screen">
      <h1 className="text-3xl font-medium text-gray-600 text-center mt-10">Employee Maintenance Assessment</h1>

      <div className="grid grid-cols-1 gap-4 p-10">
        <button className="max-w-64 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right mt-10 mr-4 h-10" onClick={openAddModal}>
          Add New Employee
        </button>

        {employees.map((employee, index) => (
          <ListItem onViewDetails={openDetailModal} key={index} item={employee} />
        ))}
      </div>
      <Modal isOpen={isDetailModal} onClose={closeDetailModal}>
        <EmployeeDetails />
      </Modal>
      <Modal isOpen={isAddModal} onClose={closeAddModal}>
        <EmployeeAdd onSave={closeAddModal} />
      </Modal>
    </div>
  );
}

export default EmployeeList;