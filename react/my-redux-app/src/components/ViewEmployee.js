import React, { Component } from 'react'
import {connect} from 'react-redux';

class ViewEmployee extends Component {

    deleteEmployee(id){
        console.log("Deleting employee with id: ", id);
        this.props.onDeleteEmployee(id);
       
    }

    render() {

        let employeeList = this.props.employees.map((employee, i)=>{
            return (
                <li key={i}>{employee.name} <button onClick={this.deleteEmployee.bind(this, employee.id)}> X </button></li>
            )
        })

        return (
            <div>
                <h2>View Employees</h2>
                <p>Get the state from store</p>
                <ul>
                    {employeeList}
                </ul>
            </div>
        )
    }
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

// export default ViewEmployee;
export default connect(mapStateToProps, mapDispatchToProps)(ViewEmployee);