// Single responsibililty of side-effects (http requests)
import {put} from 'redux-saga/effects'

export const FETCH_EMPLOYEES = "FETCH_EMPLOYEES"
export const DELETE_EMPLOYEE = "DELETE_EMPLOYEE"
export const ADD_EMPLOYEE = "ADD_EMPLOYEE"



// export const fetchEmployees = () => {
//     return (dispatch) => {
//         fetch('http://localhost:8080/employees')
//         .then(res=>res.json())
//         .then(data=>{
//             console.log(data);
//             dispatch(findEmployees(data));
//         })
//     }
// }

export const fetchEmployees = (payload) => {
    return {
        type: 'USER_FETCH_REQUESTED'
    }
}

// export function* fetchEmployees()  {
//     try{
//         const employees = yield fetch('http://localhost:8080/employees');
//         yield put({type: FETCH_EMPLOYEES, payload: employees.json()});
//     }
//     catch(e){
//         console.log(e);
//     }

// }

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