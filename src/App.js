import './App.css';
import {BrowserRouter as Router, Routes, Route, Link, NavLink} from "react-router-dom"
import ShowAllEmployeeComponent from './component/ShowAllEmployeeComponent';
import SearchEmployeeComponent from './component/SearchEmployeeComponent';
import AddEmployeeComponent from './component/AddEmployeeComponent';
import UpdateEmployeeComponent from './component/UpdateEmployeeComponent';
import DeleteEmployeeComponent from './component/DeleteEmployeeComponent';

function App() {
  return (
    <Router>
      <div>
       <li><Link to="/">Home</Link></li>
       <li><Link to="/allEmployee">Show All Employees</Link></li>
       <li><Link to="/searchEmployee">Search Emoloyee</Link></li>
       <li><Link to="/addEmployee">Add Employee</Link></li>
       <li><Link to="/updateEmployee">Update Employee</Link></li>
      </div>
      <hr color='blue' size='5px'/>
    
    <Routes>
      <Route path='/' element={<ShowAllEmployeeComponent/>}></Route>
      <Route path='/allEmployee' element={<ShowAllEmployeeComponent/>}></Route>
      <Route path='/searchEmployee' element={<SearchEmployeeComponent/>}></Route>
      <Route path='/addEmployee' element={<AddEmployeeComponent/>}></Route>
      <Route path='/updateEmployee/:id' element={<UpdateEmployeeComponent/>}></Route>
    </Routes>

    </Router>
  );
}

export default App;
