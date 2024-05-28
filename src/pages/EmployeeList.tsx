import { useState } from "react";
import ListItem from "../components/ListItem";

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

  const openDetails = () => {
    console.log('open details')
  };

  return (
    <div className="bg-gray-50 w-full h-screen">
      <h1 className="text-3xl font-medium text-gray-600 text-center mt-10">Employee Maintenance Assessment</h1>
      <div className="grid grid-cols-1 gap-4 p-10">
        {items.map((item, index) => (
          <ListItem onViewDetails={openDetails} key={index} item={item}/>
        ))}
      </div>
    </div>
  );
}

export default EmployeeList;