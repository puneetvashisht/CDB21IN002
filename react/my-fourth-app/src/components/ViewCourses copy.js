import React, { Component } from 'react'
import Card from './Card'
export default class ViewCourses extends Component {
    constructor(){
        super();
        this.state = {courses: [
          // {title: "Angular", summmary: 'framework from google'},
          // {title: "React", summmary: 'library from facebook'},
          // {title: "Ember", summmary: 'framework oper-source'},
          // {title: "Angular", summmary: 'framework from google'},
          // {title: "React", summmary: 'library from facebook'}
        ]}
      }
    
      componentDidMount() {
        fetch('http://localhost:3004/courses')
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          this.setState({courses: data})
        })
      }
      
    
      render() {
    
        let courseList = this.state.courses.map((course,i)=>{
          return (
            <Card key={i} caption= {course.title} desc={course.summmary} id={course.id}></Card>
          )
        })
    
        return (
          <div className="container">
            
          <div className="row">
    
            {courseList}
          </div>
        </div>
        )
      }
}
