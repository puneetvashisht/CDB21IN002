import React, { Component } from 'react'
import {connect} from 'react-redux';
import {fetchWorkouts, deleteWorkout} from '../actions/action';
class ViewWorkouts extends Component {

    constructor(){
        super();
        // this.state = {employees: []}
    }

    deleteWorkout(id){
        console.log("Deleting employee with id: ", id);
        this.props.onDeleteWorkout(id);
    }

    componentDidMount() {
        this.props.onFetchWorkouts();
    }   
    

    render() {
        let workoutList = []
        if(this.props.workouts){
            workoutList = this.props.workouts.map((workout, i)=>{
                return (
                    <li key={i}>{workout.title} <button onClick={this.deleteWorkout.bind(this, workout.id)}> X </button></li>
                )
            })
        }
        

        return (
            <div>
                <h2>View Workouts</h2>
                <p>Get the state from store</p>
                <ul>
                    {workoutList}
                </ul>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    console.log('Inside Component ', state);
    return {
        workouts: state.workoutReducer.workouts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteWorkout: (id)=>dispatch(deleteWorkout({id})),
        onFetchWorkouts: ()=>dispatch(fetchWorkouts())

    }

}

// export default ViewEmployee;
export default connect(mapStateToProps, mapDispatchToProps)(ViewWorkouts);