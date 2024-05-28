import EmployeeHistory from "./EmployeeHistory";

function EmployeeDetails() {
    return (
      <>
        <div className="w-full h-full flex">
          <div className="size-64 m-2 bg-cyan-300 content-end">
            <div className="bg-orange-500 w-11/12 mx-auto mb-2 p-1 text-center text-white">Inactive</div>
          </div>

          <div className="mt-4">
            <h1 className="text-2xl font-medium text-gray-700">
              Employee Name
            </h1>

            <h3 className="mt-3">
              <span className="text-lg font-medium text-gray-700">Employee ID: </span>
              <span className="text-lg text-gray-700">123456</span>
            </h3>
            <h3>
              <span className="text-lg font-medium text-gray-700">Department: </span>
              <span className="text-lg text-gray-700">IT</span>
            </h3>
            <h3>
              <span className="text-lg font-medium text-gray-700">Telefone: </span>
              <span className="text-lg text-gray-700">123-456-7890</span>
            </h3>
            <h3>
              <span className="text-lg font-medium text-gray-700">Address: </span>
              <span className="text-lg text-gray-700">123 Main St, Anytown, USA</span>
            </h3>

            <div className="mt-2">
              <label className="block text-lg font-medium text-gray-700">Update Department</label>
              <select className="p-2 border border-gray-300 rounded-md w-80">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>

              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded float-right ml-4 h-10">
                update
              </button>
            </div>
          </div>

          <div className="ml-8">
            <h1 className="text-2xl font-medium text-gray-700">
              Hire Date
            </h1>
            <h3 className="text-lg text-gray-700">
              May 2, 2021
            </h3>
            <h3 className="text-lg text-gray-700">
              2y - 1m - 4d
            </h3>

            <button className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded float-right ml-4 h-10">
              Deactivate
            </button>

            <button className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded float-right ml-4 h-10">
              Activate
            </button>
          </div>
        </div>
        <EmployeeHistory />
      </>
    );
  }
  
  export default EmployeeDetails;
  