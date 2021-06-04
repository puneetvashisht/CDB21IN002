import * as actions from '../actions/action';

let initialState = {
    workouts: []
}

// Reducers in store to modify state -- don't directly manipulate state
const workoutReducer = (state = initialState, action) =>{
   
    switch(action.type){
        case actions.FETCH_WORKOUTS:
            return {
                workouts: action.payload
            }
        case actions.ADD_WORKOUT:
        let newWorkouts = [...state.workouts, action.payload] 
        return{
            workouts: newWorkouts
        }
        case actions.DELETE_WORKOUT: 
        let filteredWorkouts = state.workouts.filter((workout) => workout.id !== action.payload.id)
        return {
            workouts: filteredWorkouts
        };
        default: return state;
    }
        
 
}

export default workoutReducer;