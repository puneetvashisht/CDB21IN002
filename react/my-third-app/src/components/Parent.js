import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {

    constructor(){
        super();
        this.state = {text: "Test message"}
    }

    parentMethod(revStr){
        console.log('In the parent..', revStr)
        this.setState({text: revStr})
    }

    render() {
        return (
            <div>
                <h2>Parent Component</h2>
                <Child message={this.state.text} onChildChange={this.parentMethod.bind(this)}></Child>
            </div>
        )
    }
}
