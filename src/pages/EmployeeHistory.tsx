
      function EmployeeHistory() {
        return (
          <div className="mt-10">
            <h1 className="text-2xl font-medium text-gray-600 my-4">Department History</h1>
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2 border border-slate-300">Date</th>
                  <th className="px-4 py-2 border border-slate-300">Department</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">3/22/2024</td>
                  <td className="border px-4 py-2">Software Engineer</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">2/15/2024</td>
                  <td className="border px-4 py-2">Product Manager</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      export default EmployeeHistory;