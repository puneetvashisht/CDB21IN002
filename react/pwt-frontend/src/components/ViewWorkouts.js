import React, { useState,useEffect } from 'react'
import { Table } from 'react-bootstrap'
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import * as actions from '../actions/workout-actions';


function ViewWorkouts(props) {

    // const [workouts, setWorkouts] = useState([]);
    const [search, setSearch] = useState('');

  

      // replacement of ComponentDidMount
  useEffect(() => {

    // actions.FETCH_WORKOUTS
    props.onFetchWorkouts();

    // dispatch an action to FETCH_WORKOUTS

    
    //  fetch('http://localhost:8080/api/v1/workouts')
    //      .then(res=>res.json())
    //      .then(response=>{
    //        console.log(response.data);
    //        setWorkouts(response.data);
    //      })
   }, []);


   const handleSearchChange = (event)=>{
      console.log('title change')
      
      // let filteredWorkouts = props.workouts.filter(workout => workout.title.startsWith(event.target.value))
      // setWorkouts(filteredWorkouts)
      // setSearch(event.target.value)
   }

   if(props.workouts){
    var workoutsList = props.workouts.map((workout,i)=>{
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


// export default ViewWorkouts

const mapStateToProps = (state) => {
  console.log('Inside Component ', state);
  return {
      workouts: state.workouts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

    // synchronous dispatches

    // setTimeout(()=>{
    //   dispatch({type: 'VIEW_WORKOUTS'})
    // }, 100)

   

      onFetchWorkouts: ()=>dispatch(actions.fetchWorkouts())

  }

}

// export default ViewEmployee;
export default connect(mapStateToProps, mapDispatchToProps)(ViewWorkouts);