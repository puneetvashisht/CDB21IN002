import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default class About extends Component {


    constructor(){
        super();
        this.state = {progress: 10}

        // setInterval(()=>{
        //     this.setState({progress : this.state.progress + 10})
        // },5000)
    }

    render() {
        return (
            <div>
                <h2>About using class syntax</h2>
                <Button variant="primary">Primary</Button>
                <ProgressBar now={this.state.progress} max="100"/>
            </div>
        )
    }
}
