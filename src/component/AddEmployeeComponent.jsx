import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function AddEmployeeComponent(){

    let[employee, setEmployee] = useState(
        {empId:0,
        empName:"",
        empSal:"",
        isMarried:false
    })

    const navigate = useNavigate();

    let handleSumit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8080/emps", employee)
        .then((success)=>{
            console.log("Employee Added Successfully !" + success.data);
            navigate("/");
        })
        .catch((error) => {
            console.error("Error While adding employee : " + error.data);
        })
    }

    let handleChange = (event) => {
        let {type, name, value, checked} = event.target;
        if("text"===type){
            setEmployee({...employee, [name]:value})
        }else{
            setEmployee({...employee, [name]:checked});
        }
    }
    return (
      <div>
        <h3>Please enter below details to add employee in system ... </h3>
        <form onSubmit={handleSumit}>
            Employee Id: <input type="text" name="empId" value={employee.empId} onChange={handleChange} /><br/>
            Employee Name: <input type="text" name="empName" value={employee.empName} onChange={handleChange} /><br/>
            Employee Salary: <input type="text" name="empSal" value={employee.empSal} onChange={handleChange} /><br/>
            Is Employee Married: <input type="checkbox" name="isMarried" value={employee.isMarried} onChange={handleChange} /><br/>
            <input type="submit" value = "ADD"/>

        </form>
        <p>
            Id: {employee.empId}, Name: {employee.name}, Salary: {employee.empSal}, Marrital Status: {employee.isMarried ? "Married" : "Single"} 
        </p>
      </div>
    )
}
