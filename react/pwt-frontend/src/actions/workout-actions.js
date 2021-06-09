export const FETCH_WORKOUTS = "FETCH_WORKOUTS"
export const START_WORKOUT = "START_WORKOUT"
export const END_WORKOUT = "END_WORKOUT"
export const ADD_WORKOUT = "ADD_WORKOUT"


export const fetchWorkouts = () => {

    // hardcoded
    let workouts =  [
        {"title": "Run for 5 mins (from actions)", "desc": "test desc", cbpm: 343}
    ]

    // fetch it from server side

    return {
        type: FETCH_WORKOUTS,
        payload: workouts
    }
}