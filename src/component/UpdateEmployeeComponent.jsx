import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'


export default function UpdateEmployeeComponent() {

let [employee, setEmployee] = useState({empId:0,
  empName:"",
  empSal:"",
  isMarried:false })
  let {id} = useParams();
  let navigate = useNavigate();

  // useEffect(() => {
  //   axios.get(`http://localhost:8080/emps/${id}`)
  //   .then((response) => {
  //     setEmployee(response.data)
  //   })
  //   .catch()
  // })

  let handleChange = (event) => {
    let {type, name, value, checked} = event.target;
    if("text"===type){
        setEmployee({...employee, [name]:value})
        console.log(JSON.stringify(employee))
    }else{
        setEmployee({...employee, [name]:checked});
    }
}

  let handleUpdate = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:8080/emps/${id}`, employee)
    .then((response)=>{
      console.log("Record updated successfully .. "+ {id})
      navigate("/");
    })
    .catch()
  }

  return (
    <div>
      <h3>Welcome to Employee Update Page</h3>
      <form onSubmit={handleUpdate}>
            Id: <input type="text" name="empId" value={employee.id} readOnly /><br/>
            Employee Id: <input type="text" name="empId" value={employee.empId} onChange={handleChange} /><br/>
            Employee Name: <input type="text" name="empName" value={employee.empName} onChange={handleChange} /><br/>
            Employee Salary: <input type="text" name="empSal" value={employee.empSal} onChange={handleChange} /><br/>
            Is Employee Married: <input type="checkbox" name="isMarried" value={employee.isMarried} onChange={handleChange} /><br/>
            <input type="submit" value = "UPDATE"/>
        </form>
    </div>
  )
}
