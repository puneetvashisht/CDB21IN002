
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

export default reducer;