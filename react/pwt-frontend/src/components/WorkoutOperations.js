import React, {useState} from 'react'
import {useParams} from "react-router-dom";
import {Button, Table} from 'react-bootstrap'
import {connect} from 'react-redux';
import * as actions from '../actions/workout-actions';


function WorkoutOperations(props){

    let { id } = useParams();
    let [show, setShow] = useState(false);
    // let [startTime, setStartTime] = useState();
    // let [endTime, setEndTime] = useState();
    // let [totalCalories, setTotalCalories] = useState();


    const diff_minutes = (dt2, dt1) =>{
        console.log(dt2.getTime());
        console.log(dt1.getTime());
        var diff =(dt2.getTime() - dt1.getTime()) / 1000;
        diff /= 60;
        return Math.abs(Math.round(diff));  
    }

    // const startWorkout = ()=>{
    //     fetch('http://localhost:8080/api/v1/workouts/start/' + title, {
    //         method: 'PATCH',
    //         headers: {"Content-type": "application/json"}
    //     })
    //     .then(res=> res.json())
    //     .then(response=>{
    //         console.log(response);
    //         setShow(!show)
    //         setStartTime(new Date(response.data.startTime));
    //         setEndTime();
    //         setTotalCalories();
    //     })
    // }
    // const endWorkout = ()=>{
    //     fetch('http://localhost:8080/api/v1/workouts/end/' + title, {
    //         method: 'PATCH',
    //         headers: {"Content-type": "application/json"}
    //     })
    //     .then(res=> res.json())
    //     .then(response=>{
    //         let startTime = new Date(response.data.startTime);
    //         let endTime = new Date(response.data.endTime)

    //         console.log(response);
    //         setShow(!show)
    //         setEndTime(endTime);

    //         let difference = diff_minutes(startTime,endTime)
    //         console.log(difference)
    //         setTotalCalories(difference * response.data.cbpm)
    //     })
    // }

    return (
        <>
        <h2>Start workout for ID</h2>
        <h2>{id}</h2>

        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Total Calories Burnt</th>
          </tr>
        </thead>
        <tbody>
            <tr>
            <td>{props.workout.startTime}</td>
            <td>{props.workout.endTime}</td>
            <td>{props.workout.totalCalories}</td>     
          </tr>
        </tbody>
      </Table>

        <Button disabled={show} onClick={()=> props.onStartWorkout(id) } variant="primary">Start Workout</Button>
        <Button disabled={!show} variant="primary">End Workout</Button>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onStartWorkout: (id) =>dispatch(actions.startWorkout(id))
    }
}

const mapStateToProps = (state) => {
    return {
        workout: state.workoutReducer.currentWorkout
    }
}


// export default ViewEmployee;
export default connect(mapStateToProps, mapDispatchToProps)(WorkoutOperations);