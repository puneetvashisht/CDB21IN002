export const FETCH_EMPLOYEES = "FETCH_EMPLOYEES"
export const DELETE_EMPLOYEE = "DELETE_EMPLOYEE"
export const ADD_EMPLOYEE = "ADD_EMPLOYEE"


export const FETCH_WORKOUTS = "FETCH_WORKOUTS"
export const DELETE_WORKOUT = "DELETE_WORKOUT"
export const ADD_WORKOUT = "ADD_WORKOUT"



export const fetchWorkouts = () => {
    return (dispatch) => {
        fetch('http://localhost:8080/workouts')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            dispatch(findWorkouts(data));
        })
    }
}



const findWorkouts = (payload) => {
    return {
        type: FETCH_WORKOUTS,
        payload
    }
}


export const deleteWorkout = (workout) => {
    // console.log('In action', workout)
    return (dispatch) => {
        fetch('http://localhost:8080/workouts/' + workout.id , {
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            dispatch(removeWorkout(workout));
        })
    }
}

export const removeWorkout = (payload) => {
    return {
        type: DELETE_WORKOUT,
        payload
    }
}



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