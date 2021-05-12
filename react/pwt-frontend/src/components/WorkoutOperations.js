import React from 'react'
import {useParams} from "react-router-dom";
import Button from 'react-bootstrap/Button'

export default function WorkoutOperations(){

    let { title } = useParams();
    return (
        <>
        <h2>{title}</h2>
        <Button variant="primary">Start Workout</Button>
        <Button variant="primary">End Workout</Button>
        </>
    )
}