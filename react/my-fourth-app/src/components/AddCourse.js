import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'; 


export default function AddCourse(){


    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    // const [count, setCount] = useState({value: 0});


    const addEmployee = () =>{
        console.log(title, summary)
        fetch('http://localhost:3004/courses', {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({title, summary})
        })
        .then(res=> console.log(res))

    }
    const handleTitleChange = (event) =>{
        setTitle(event.target.value)
    }
    const handleSummaryChange = (event) =>{
        setSummary(event.target.value)
    }

    return (
        <div>
        <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Title</span>
        <input onChange={handleTitleChange} value={title} type="text" class="form-control" placeholder="Enter title" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        
        <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Summary</span>
        <input onChange={handleSummaryChange} value={summary} type="text" class="form-control" placeholder="Enter summary" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>

        <Button onClick={addEmployee} variant="primary">Add Employee</Button>
        
    </div>
    )
}

// export default class AddCourse extends Component {
//     constructor(props) {
//         super(props);
//         this.addEmployee = this.addEmployee.bind(this);
//         this.title = React.createRef();
//         this.summary = React.createRef();
//       }

//       addEmployee(event){
//         console.log('A name was submitted: ' + this.title.current.value);
//         console.log('A name was submitted: ' + this.summary.current.value);

//         fetch('http://localhost:3004/courses', {
//             method: 'POST',
//             headers: {"Content-type": "application/json"},
//             body: JSON.stringify({title: this.title.current.value, summmary: this.summary.current.value})
//         })
//         .then(res=> console.log(res))
        

//         event.preventDefault();
//       }


//     render() {
//         return (
//             <div>
//                 <div class="input-group mb-3">
//                 <span class="input-group-text" id="basic-addon1">Title</span>
//                 <input  ref={this.title} type="text" class="form-control" placeholder="Enter title" aria-label="Username" aria-describedby="basic-addon1"/>
//                 </div>
                
//                 <div class="input-group mb-3">
//                 <span class="input-group-text" id="basic-addon1">Summary</span>
//                 <input ref={this.summary} type="text" class="form-control" placeholder="Enter summary" aria-label="Username" aria-describedby="basic-addon1"/>
//                 </div>

//                 <button onClick={this.addEmployee} className="btn btn-primary">Add Employee</button>
                
//             </div>
//         )
//     }
// }
