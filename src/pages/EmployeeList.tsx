import { useState } from "react";
import ListItem from "../components/ListItem";
import Modal from "../components/Modal";
import EmployeeDetails from "./EmployeeDetails";

function EmployeeList() {
  const [items] = useState([
    {
      firstName: "John",
      lastName: "Doe",
      department: "IT",
      hireDate: "2021-11-02",
      active: true
    },
    {
      firstName: "Frank",
      lastName: "Sinatra",
      department: "HR",
      hireDate: "2015-05-05",
      active: true
    },
    {
      firstName: "Mary",
      lastName: "Morrow",
      department: "Finance",
      hireDate: "2019-12-02",
      active: true
    }
  ]);

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
        {items.map((item, index) => (
          <ListItem onViewDetails={openModal} key={index} item={item}/>
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <EmployeeDetails />
      </Modal>
    </div>
  );
}

export default EmployeeList;