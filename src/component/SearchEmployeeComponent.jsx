import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';

export default function SearchEmployeeComponent() {
    let [searchBy, setSearchBy] = useState("");
    let [idenfierValue, setIdentifierValue] = useState("");
    let [isIdSelected, setIsIdSelected] = useState(false);
    let [nameCheck, setNameCheck] = useState(false);
    let [salaryCheck, setSalaryCheck] = useState(false);
    let [marriedCheck, setMarriedCheck] = useState(false);
    let [employeeIdCheck, setEmployeeIdCheck] = useState(false);
    let [employees, setEmployees] = useState([]);

    let searchEmployee = (event)=>{
        event.preventDefault();
        axios.get(`http://localhost:8080/emps?${searchBy}=${idenfierValue}`)
        .then((response)=>{
            setEmployees(response.data)
            console.log("Search completed successfully with data : " + JSON.stringify(employees))
        })
        .catch((error)=>{
            console.error(`Failed to search data using ${searchBy} with value ${idenfierValue}`);
        })
    }

    let handleOption = (event) => {
        let {name, type, value} = event.target;
        if("radio"===type){
            setSearchBy(name);
            correctRadioButtonStatus();
        }else{
            setIdentifierValue(value);
        }

        function correctRadioButtonStatus() {
            setIsIdSelected(name === "id");
            setEmployeeIdCheck(name === "empId");
            setMarriedCheck(name === "isMarried");
            setNameCheck(name === "empName");
            setSalaryCheck(name === "empSal");
        }
    }

    let employeeTableRowData = employees.map((employee, index) =>{
      console.log(`Processing Employee Data : ${JSON.stringify(employees)}`);
        return (
            <tr key={index}>
                <td>{employee.empId}</td>
                <td>{employee.empName}</td>
                <td>{employee.empSal}</td>
                <td>{employee.isMarried ? "Married" : "Single"}</td>
                <td><button onClick={()=> {this.deleteEmployee(employee.id)}}>DELETE</button></td>
                <td><Link to={`/updateEmployee/${employee.id}`}>UPDATE</Link></td>
           </tr>
        )
    });

  return (
    <div>
        <h3>Please choose employee search options ..</h3>
        <form onSubmit={searchEmployee}>
            ID : <input type="radio" name="id" checked = {isIdSelected} onChange={handleOption}></input> <br/>
            employee Id : <input type="radio" name="empId" checked = {employeeIdCheck} onChange={handleOption}></input> <br/>
            Employee Name : <input type="radio" name="empName" checked = {nameCheck} onChange={handleOption}></input> <br/>
            Marital status : <input type="radio" name="isMarried" checked = {marriedCheck} onChange={handleOption}></input> <br/>
            Employee Salary : <input type="radio" name="empSal" checked = {salaryCheck} onChange={handleOption}></input> <br/>
            {searchBy + " Value"} <input type= "text" name={searchBy} onChange = {(event)=>{
                setIdentifierValue(event.target.value);
            }} /> <br/>
            <input type="submit" value="SUBMIT"/>
        </form>

        <br/>
        <br/>

        <h4> Following data is found: </h4>
        <table border="1">
        <thead>
            <tr>
                <th>Employee Id</th>
                <th>Employee Name</th>
                <th>Employee Sal</th>
                <th>Is Married</th>
                <th>Delete ?</th>
                <th>Update ?</th>
            </tr>
        </thead>
        <tbody>
        {employeeTableRowData}
        </tbody>
        </table>
    </div>
  )
}
