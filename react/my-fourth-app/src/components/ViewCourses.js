import React, { useState,useEffect } from 'react'
import Card from './Card'

export default function ViewCourses(){

  const [courses, setCourses] = useState([]);
  const [count, setCount] = useState({value: 0});


  const incrementCount = () => {
    console.log('click event', count );
    setCount({value: (count.value + 1)});
  }

  // replacement of ComponentDidMount
  useEffect(() => {
    fetch('http://localhost:3004/courses')
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          setCourses(data);
        })
  }, []);

  console.log(courses)

    let courseList = courses.map((course,i)=>{
          return (
            <Card key={i} caption= {course.title} desc={course.summmary} id={course.id}></Card>
          )
    })

  return (
    <div className="container">     
          <div className="row">
            {count.value}
            <button onClick={incrementCount}>Increment Count</button>
           {courseList}
          </div>
      </div>
  )
}


// export default class ViewCourses extends Component {
//     constructor(){
//         super();
//         this.state = {courses: [
//           // {title: "Angular", summmary: 'framework from google'},
//           // {title: "React", summmary: 'library from facebook'},
//           // {title: "Ember", summmary: 'framework oper-source'},
//           // {title: "Angular", summmary: 'framework from google'},
//           // {title: "React", summmary: 'library from facebook'}
//         ]}
//       }
    
//       componentDidMount() {
//         fetch('http://localhost:3004/courses')
//         .then(res=>res.json())
//         .then(data=>{
//           console.log(data);
//           this.setState({courses: data})
//         })
//       }
      
    
//       render() {
    
//         let courseList = this.state.courses.map((course,i)=>{
//           return (
//             <Card key={i} caption= {course.title} desc={course.summmary} id={course.id}></Card>
//           )
//         })
    
//         return (
//           <div className="container">
            
//           <div className="row">
    
//             {courseList}
//           </div>
//         </div>
//         )
//       }
// }
