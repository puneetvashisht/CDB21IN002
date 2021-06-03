export const FETCH_EMPLOYEES = "FETCH_EMPLOYEES"
export const DELETE_EMPLOYEE = "DELETE_EMPLOYEE"
export const ADD_EMPLOYEE = "ADD_EMPLOYEE"


export const fetchEmployees = () => {
    return (dispatch) => {
        fetch('http://localhost:8080/employees')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            dispatch(findEmployees(data));
        })
    }
}



const findEmployees = (payload) => {
    return {
        type: FETCH_EMPLOYEES,
        payload
    }
}


export const saveEmployee = (employee) => {
    return (dispatch) => {
        fetch('http://localhost:8080/employees', {
            method: 'POST',
            body: JSON.stringify(employee),
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            dispatch(addEmployees(data));
        })
    }
}

const addEmployees = (payload) => {
    return {
        type: ADD_EMPLOYEE,
        payload
    }
}



export const deleteEmployee = (payload) => {
    return {
        type: "DELETE_EMPLOYEE",
        payload
    }
}

export const addEmployee = (payload) => {
    return {
        type: "ADD_EMPLOYEE",
        payload
    }
}