import React, { useState,useEffect } from 'react'
import { Table } from 'react-bootstrap'
import {Link} from "react-router-dom";

export default function ViewWorkouts() {

    const [workouts, setWorkouts] = useState([]);
    const [search, setSearch] = useState('');

  

      // replacement of ComponentDidMount
  useEffect(() => {

     fetch('http://localhost:8080/api/v1/workouts')
         .then(res=>res.json())
         .then(response=>{
           console.log(response.data);
           setWorkouts(response.data);
         })
   }, []);


   const handleSearchChange = (event)=>{
      console.log('title change')
      
      let filteredWorkouts = workouts.filter(workout => workout.title.startsWith(event.target.value))
      setWorkouts(filteredWorkouts)
      setSearch(event.target.value)
   }

   if(workouts){
    var workoutsList = workouts.map((workout,i)=>{
      return (
         <tr key={i}>
           <td>{i+1}</td>
           <td><Link to={'/operations/' + workout.title}>{workout.title}</Link></td>
           <td>{workout.desc}</td>
           <td>{workout.cbpm}</td>
         </tr>
      )
  })
   }
   

    return (

      <>

        <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Search By Title</span>
        <input onChange={handleSearchChange} value={search} type="text" class="form-control" placeholder="Enter title" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
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
      </>
    )
}