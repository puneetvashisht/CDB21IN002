import * as actions from '../actions/action';

let initialState = {
    employees: [
        // {id:23, name:"Ravi", salary:34343.34},
        // {id:3, name:"Priya", salary:33343.34},
        // {id:123, name:"Arijit", salary:66343.34}
    ]
}

// Reducers in store to modify state -- don't directly manipulate state
const reducer = (state = initialState, action) =>{
    
    switch(action.type){
        case actions.FETCH_EMPLOYEES:
            return {
                employees: action.payload
            }
        case actions.ADD_EMPLOYEE:
        let newEmployees = [...state.employees, action.payload] 
        return{
            employees: newEmployees
        }
        case actions.DELETE_EMPLOYEE: 
        let filteredEmployee = state.employees.filter((employee) => employee.id !== action.payload.id)
        return {
            employees: filteredEmployee
        };
        default: return state;
    }
        
 
}

export default reducer;