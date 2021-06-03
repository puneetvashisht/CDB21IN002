import React, { Component } from 'react'
import {connect} from 'react-redux';
import {fetchEmployees, deleteEmployee} from '../actions/action';
class ViewEmployees extends Component {

    constructor(){
        super();
        // this.state = {employees: []}
    }

    deleteEmployee(id){
        console.log("Deleting employee with id: ", id);
        this.props.onDeleteEmployee(id);
    }

    componentDidMount() {
        this.props.onFetchEmployee();
    }   
    

    render() {
        let employeeList = []
        if(this.props.employees){
             employeeList = this.props.employees.map((employee, i)=>{
                return (
                    <li key={i}>{employee.employee_name} <button onClick={this.deleteEmployee.bind(this, employee.id)}> X </button></li>
                )
            })
        }
        

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
    console.log('Inside Component ', state);
    return {
        employees: state.employees
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteEmployee: (id)=>dispatch(deleteEmployee({id})),
        onFetchEmployee: ()=>dispatch(fetchEmployees())

    }

}

// export default ViewEmployee;
export default connect(mapStateToProps, mapDispatchToProps)(ViewEmployees);