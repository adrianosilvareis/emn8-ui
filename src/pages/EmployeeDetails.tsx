import EmployeeAvatar from "../components/EmployeeAvatar";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeHireDisplay from "../components/EmployeeHireDIsplay";
import EmployeeHistory from "../components/EmployeeHistory";
import EmployeeInfo from "../components/EmployeeInfo";

function EmployeeDetails() {
    return (
        <>
          <div className="w-full h-full flex">
            <EmployeeAvatar />

            <div className="mt-4">
              <EmployeeInfo />
              <EmployeeForm />                
            </div>

            <div className="ml-8">
              <EmployeeHireDisplay />
            </div>
          </div>
          <EmployeeHistory />
        </>
    );
  }
  
  export default EmployeeDetails;
  