import React, {useEffect } from 'react'
import {connect} from 'react-redux';
import {saveEmployee} from '../actions/action';
// import {connect} from 'react-redux';
function AddEmployee(props) {

 const addEmployee = () =>{
    let employee = {
        "employee_name": "Redux",
        "employee_salary": 99999,
        "employee_age": 61,
        "profile_image": ""
      }  
    props.onAddEmployee(employee);
 }

  return (
    <button onClick={addEmployee}>Add Employee</button>
  )
}


const mapStateToProps = (state) => {
    return {   
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddEmployee: (employee)=>dispatch(saveEmployee(employee)),
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(AddEmployee);
