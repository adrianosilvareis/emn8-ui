import { useState } from "react";
import ListItem from "../components/ListItem";
import Modal from "../components/Modal";
import { useEmployeeContext } from "../hooks/useEmployeeContext";
import EmployeeDetails from "./EmployeeDetails";

function EmployeeList() {
  const { employees } = useEmployeeContext();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="bg-gray-50 w-full h-screen">
      <h1 className="text-3xl font-medium text-gray-600 text-center mt-10">Employee Maintenance Assessment</h1>
      <div className="grid grid-cols-1 gap-4 p-10">
        {employees.map((employee, index) => (
          <ListItem onViewDetails={openModal} key={index} item={employee}/>
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <EmployeeDetails />
      </Modal>
    </div>
  );
}

export default EmployeeList;