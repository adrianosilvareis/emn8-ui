import ReactDOM from 'react-dom/client';
import { AppDepartmentProvider } from './context/AppDepartmentContext';
import { AppEmployeeProvider } from './context/AppEmployeeContext';
import './index.css';
import EmployeeList from './pages/EmployeeList';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <AppEmployeeProvider>
    <AppDepartmentProvider>
      <EmployeeList />
    </AppDepartmentProvider>
  </AppEmployeeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
