import React, { useState } from 'react'
import {Button, Toast} from 'react-bootstrap'; 


export default function AddWorkout(){


    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [cpbm, setCpbm] = useState();
    const [showA, setShowA] = useState(false);
    // const [count, setCount] = useState({value: 0});


    const addWorkout = () =>{
        console.log(title, desc)
        fetch('http://localhost:8080/api/v1/workouts', {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({title, desc, cbpm:cpbm})
        })
        .then(res=> {
            console.log(res);
            if(res.status === 201){
                setShowA(true);
                setTitle('');
                setDesc('');
                setCpbm('');
            }
        })

    }

    const toggleShowA = () => setShowA(!showA);

    const handleTitleChange = (event) =>{
        setTitle(event.target.value)
    }
    const handleDescChange = (event) =>{
        setDesc(event.target.value)
    }
    const handleCpbmChange = (event) =>{
        setCpbm(event.target.value)
    }

    return (

       <>
       <Toast show={showA} onClose={toggleShowA}>
        <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
        <strong className="mr-auto">Notification</strong>
        <small>just now</small>
        </Toast.Header>
        <Toast.Body>Workout successfully added!!</Toast.Body>
      </Toast> 


      <div>
        <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Title</span>
        <input onChange={handleTitleChange} value={title} type="text" class="form-control" placeholder="Enter title" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        
        <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Summary</span>
        <input onChange={handleDescChange} value={desc} type="text" class="form-control" placeholder="Enter summary" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Calories Burnt (per minute)</span>
        <input onChange={handleCpbmChange} value={cpbm} type="number" class="form-control" placeholder="Enter CPBM" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>

        <Button onClick={addWorkout} variant="primary">Add Workout</Button>
        
    </div>
      </>

        
    )
}
