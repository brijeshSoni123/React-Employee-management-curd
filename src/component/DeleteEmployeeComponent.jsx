import React, { Component } from 'react'
import axios from 'axios'

export default class DeleteEmployeeComponent extends Component {

  deleteEmployee(id) {
    alert(`About to delete ${id}`);
    axios.delete(`http://localhost:8080/emps/${id}`)
    .then((response) => {
        console.log(`Employee Id ${id} got deleted !!` + response.data )
        this.componentDidMount();
    })
    .catch(()=>{console.log(`Employee Id ${id} was not deleted !!`)})
}

  render() {
    return (
      alert("deleted !!")
    )
  }
}
