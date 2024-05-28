import { Employee } from "../context/AppEmployeeContext";
import { calculateDuration } from "../helper/calculate-duration";
import { formatDate } from "../helper/format-date";
import { useEmployeeContext } from "../hooks/useEmployeeContext";

type ListItemProps = {
  onViewDetails: () => void;
  item: Employee;
};

function ListItem({ onViewDetails, item }: ListItemProps){
  const duration = calculateDuration(new Date(item.hireDate));
  const formattedDate = formatDate(new Date(item.hireDate));

  const { onGetEmployeeDetails } = useEmployeeContext();

  const onOpenViewDetail = () => {
    onGetEmployeeDetails(item.id);
    onViewDetails();
  }

  return (
    <div className="col-span-1 bg-white overflow-hidden shadow rounded-lg">
      <div className="flex">
        <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden m-4"></div>
        <div className="px-4 py-5 sm:p-6 flex-1">
          <h3>
            <span className="text-lg font-medium text-gray-900">{item.firstName} {item.lastName} </span>
            ({item.department.name})
          </h3>
          <p className="mt-1 max-w-2xl text-sm font-medium text-gray-900">Hire Date</p>
          <p>{formattedDate} ({duration})</p>
        </div>

        <button className="w-x bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded float-right mt-10 mr-4 h-10" onClick={onOpenViewDetail}>
          View Details
        </button>
      </div>
    </div>
  );
}

export default ListItem;