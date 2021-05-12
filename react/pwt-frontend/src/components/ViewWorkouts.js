import React, { useState,useEffect } from 'react'
import { Table } from 'react-bootstrap'
import {Link} from "react-router-dom";

export default function ViewWorkouts() {

    const [workouts, setWorkouts] = useState([]);

      // replacement of ComponentDidMount
  useEffect(() => {

     fetch('http://localhost:8080/api/v1/workouts')
         .then(res=>res.json())
         .then(data=>{
           console.log(data);
           setWorkouts(data);
         })
   }, []);


   let workoutsList = workouts.map((workout,i)=>{
       return (
          <tr key={i}>
            <td>{i+1}</td>
            <td><Link to={'/operations/' + workout.title}>{workout.title}</Link></td>
            <td>{workout.desc}</td>
            <td>{workout.cbpm}</td>
          </tr>
       )
   })

    return (
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Calories Burnt(per minute)</th>
          </tr>
        </thead>
        <tbody>
          {workoutsList}
        </tbody>
      </Table>
    )
}