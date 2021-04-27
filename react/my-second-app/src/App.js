import logo from './logo.svg';
// import './App.css';
import Card from './Card'

import React, { Component } from 'react'

export default class App extends Component {

  constructor(){
    super();
    this.state = {courses: [
      {title: "Angular", summmary: 'framework from google'},
      {title: "React", summmary: 'library from facebook'},
      {title: "Ember", summmary: 'framework oper-source'},
      {title: "Angular", summmary: 'framework from google'},
      {title: "React", summmary: 'library from facebook'}
    ]}
  }

  render() {

    let courseList = this.state.courses.map((course)=>{
      return (
        <Card caption= {course.title} desc={course.summmary}></Card>
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

