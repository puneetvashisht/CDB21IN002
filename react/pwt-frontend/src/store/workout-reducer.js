import * as actions from '../actions/workout-actions';
let initialState = {
    workouts: [
        {"title": "Run for 5 mins", "desc": "test desc", cbpm: 343}
    ]
}

// Reducers in store to modify state -- don't directly manipulate state
const reducer = (state = initialState, action) =>{
    console.log('Action recieved at reducer', action);
    switch(action.type){
        case actions.FETCH_WORKOUTS:
            return {
                workouts: action.payload
            }
        default : return state
    }
 
}

export default reducer;