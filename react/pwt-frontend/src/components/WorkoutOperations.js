import React, {useState} from 'react'
import {useParams} from "react-router-dom";
import {Button, Table} from 'react-bootstrap'

export default function WorkoutOperations(){

    let { title } = useParams();
    const [show, setShow] = useState(false);
    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState();
    const [totalCalories, setTotalCalories] = useState();
    // const [show, setShow] = useState(false);

    const startWorkout = ()=> {
        console.log(title)
        fetch('http://localhost:8080/api/v1/workouts/start/' + title, {
            method: 'PATCH',
            headers: {"Content-type": "application/json"}
           
        })
        .then(res=>res.json())
        .then(response=> {
            setStartTime(new Date(response.data.startTime).toLocaleString())
            setShow(!show)
        })
    }

    const diff_minutes = (dt2, dt1) =>{
        var diff =(dt2.getTime() - dt1.getTime()) / 1000;
        diff /= 60;
        return Math.abs(Math.round(diff));  
    }

    const endWorkout = ()=> {
        console.log(title)
        fetch('http://localhost:8080/api/v1/workouts/end/' + title, {
            method: 'PATCH',
            headers: {"Content-type": "application/json"}
           
        })
        .then(res=>res.json())
        .then(response=> {
            let difference = diff_minutes(new Date(response.data.startTime), new Date(response.data.endTime))
            console.log('Diffence in mins: ' + difference)
            console.log('Calories burtn per minute: ' + response.data.cbpm)
            console.log('Total Calories: ' +  (difference * response.data.cbpm))
            setEndTime(new Date(response.data.endTime).toLocaleString())
            setShow(!show)
            setTotalCalories(difference * response.data.cbpm)
        })
    }


    return (
        <>
        <h2>{title}</h2>
        {/* <h3>Start time: {startTime.getHours()} : {startTime.getMinutes()} : {startTime.getSeconds()}</h3>
        <h3>Start time: {startTime.getTime()}</h3> */}
        {/* <h3>Start time: {startTime}</h3>
        <h3>End time: {endTime}</h3>
        <h2>Total Calories: {totalCalories}</h2> */}


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
            <td>{startTime}</td>
            <td>{endTime}</td>
            <td>{totalCalories}</td>
          </tr>
        </tbody>
      </Table>
        <Button variant="primary"  disabled={show} onClick={startWorkout}>Start Workout</Button>
        <Button variant="primary" disabled={!show} onClick={endWorkout}>End Workout</Button>
        </>
    )
}