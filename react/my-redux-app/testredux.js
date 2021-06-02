// library import
const redux = require('redux');

let initialState = {
    employees: [
        {id:23, name:"Ravi", salary:34343.34},
        {id:3, name:"Priya", salary:33343.34},
        {id:123, name:"Arijit", salary:66343.34}
    ],
    workouts: [

    ]
}

// Reducers in store to modify state -- don't directly manipulate state
const reducer = (state = initialState, action) =>{
    console.log('Action recieved at reducer', action);
    switch(action.type){
        case 'FETCH_EMPLOYEES': return state.employees;
        case 'ADD_EMPLOYEE':
        let newEmployees = [...state.employees, action.payload] 
        return{
            employees: newEmployees
        }
        case 'DELETE_EMPLOYEE': 
        let filteredEmployee = state.employees.filter((employee) => employee.id != action.payload.id)
        return {
            employees: filteredEmployee
        };
    }
        return state;
 
}

// Create a store with initial state
const store = redux.createStore(reducer)

// See updated state
store.subscribe(()=>console.log('State updated to...', store.getState()));

// Dispatching Actions
console.log('dispatching action..')

// var addAction = {type: 'ADD_EMPLOYEE', payload: {id:333, name:"Abhiti", salary:63634.34}}
// store.dispatch(addAction);

store.dispatch({type: 'DELETE_EMPLOYEE', payload: {id:37}})


// store.dispatch({type: 'FETCH_EMPLOYEES'})





