import  authHeader from './auth-header';

export const FETCH_WORKOUTS = "FETCH_WORKOUTS"
export const START_WORKOUT = "START_WORKOUT"
export const END_WORKOUT = "END_WORKOUT"
export const ADD_WORKOUT = "ADD_WORKOUT"


const startWorkoutAction = (payload) => {
    return {
        type: START_WORKOUT,
        payload
    }
}

export const startWorkout = (id) => {
    return (dispatch) => {
        fetch('http://localhost:8080/api/v1/workouts/start/' + id, {
            method:'PATCH',
            headers: authHeader()
        })
        .then(res=>res.json())
        .then(response=>{
            console.log(response);
            dispatch(startWorkoutAction(response.data));
        })
    }
}


const findWorkouts = (payload) => {
    return {
        type: FETCH_WORKOUTS,
        payload
    }
}


// asynchrnous dispatches
export const fetchWorkouts = () => {
    return (dispatch) => {
        fetch('http://localhost:8080/api/v1/workouts', {
            headers: authHeader()
        })
        .then(res=>res.json())
        .then(response=>{
            console.log(response);
            dispatch(findWorkouts(response.data));
        })
    }

    // // hardcoded
    // let workouts =  [
    //     {"title": "Run for 5 mins (from actions)", "desc": "test desc", cbpm: 343}
    // ]

    // // fetch it from server side

    // return {
    //     type: FETCH_WORKOUTS,
    //     payload: workouts
    // }
}