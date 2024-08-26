import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import SignIn from './Pages/SignIn';
import PayRoll from './Pages/PayRoll';
import Settings from './Pages/Settings';
import Support from './Pages/Support';
import Task from './Pages/Task';
import Announcement from './Pages/Announcement'
import Employee from './Pages/Employee/Employee';
import EmpDetail from './Pages/Employee/EmpDetails/EmpDetail';
import Attendance from './Pages/Attendance/Attendance'
import AttendanceList from './Pages/Attendance/AttendanceList/AttendanceList'
import LeaveReq from './Pages/Attendance/LeaveReq/LeaveReq'
import AddEmp from './Components/AddEmp/AddEmp';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/employee' element={<Employee />} />
        <Route path='/employee/empdetail' element={<EmpDetail />} />
        <Route path='/employee/empdetail/addemp' element={<AddEmp/>} />
        <Route path='/payroll' element={<PayRoll />} />
        <Route path='/task' element={<Task />} />
        <Route path='/announcement' element={<Announcement />} />
        <Route path='/attendance' element={<Attendance/>} />
        <Route path='/attendance/leaverequest' element={<LeaveReq/>} />
        <Route path='/attendance/attendancelist' element={<AttendanceList/>} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/support' element={<Support />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
