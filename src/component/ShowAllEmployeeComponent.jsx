import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import CompanyButtonComponent from './CompanyButtonComponent';
export default class ShowAllEmployeeComponent extends Component {

    constructor(props){
        super(props);
        this.state={
            employeesData:[],
            pageUpdatd:0
        }
    }

    handleButtonClick = () =>{
        alert("Welcome to Capgemini")
    }

    componentDidMount(){
        var responsePromise = axios.get("http://localhost:8080/emps");
        responsePromise
            .then((successResponse) => {this.setState({employeesData:successResponse.data})})
            .catch((errorResponse) => {console.error("Error while fetching Data !!" + errorResponse.data)})
    }

    deleteEmployee = (id) => {
        alert(`About to delete ${id}`);
        axios.delete(`http://localhost:8080/emps/${id}`)
        .then((response) => {
            console.log(`Employee Id ${id} got deleted !!` )
            this.componentDidMount();
        })
        .catch(()=>{console.log(`Employee Id ${id} was not deleted !!`)})
    }

  render() {
    let buttonStyle = {backgroundColor:"blue"}
    var employeeTableRowData = this.state.employeesData.map((employee, index) =>{
        return (
            <tr key={index}>
                <td>{employee.id}</td>
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
        <h3>Please find below list of all Employees received from data service ... </h3>
        <br/>
      <table border="1">
        <thead>
            <tr>
                <th>Id</th>
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
      <CompanyButtonComponent style = {buttonStyle} handleButtonClick={this.handleButtonClick} caption = "CAPGEMINI"></CompanyButtonComponent>
      </div>
    )
  }
}
