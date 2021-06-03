import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux';
function Totalemp(props) {
//   const [Employees, setEmployee] = useState([]);
  // replacement of ComponentDidMount
//   useEffect(() => {
//     fetch('http://localhost:3000/employee')
//       .then(res => res.json())
//       .then(data => {
//         console.log(data);
//         setEmployee(data);
//       })
//   }, []);

  console.log(props);
  let EmployeeList = props.employees.map((Employee, i) => {
      return (
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{Employee.employee_name}</td>
          <td>{Employee.employee_salary}</td>
          <td>{Employee.employee_age}</td>
          <td>{Employee.profile_image}</td>
        </tr>
      )
    });
  
 

  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Employee_name</th>
          <th scope="col">Employee_salary</th>
          <th scope="col">Employee_age</th>
          <th scope="col">Profile_image</th>
        </tr>
      </thead>
      <tbody>
        {EmployeeList}
      </tbody>
    </table>
  )
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        employees: state.employees
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteEmployee: (id)=>dispatch({type: 'DELETE_EMPLOYEE', payload: {id}})
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Totalemp);