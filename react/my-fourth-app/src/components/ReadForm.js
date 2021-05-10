import React, { Component } from 'react'

export default class ReadForm extends Component {

    constructor(){
        super();
        // this.input = React.createRef();
        this.state = {input: ''}
    }

    handleClick(){
        // console.log(this.input.current.value);
    }
    handleChange(event){
        document.getElementById("test")
        console.log(event.target.value);
        if(event.target.value.length < 5){
            this.setState({errorMessage: 'Minimum 5 length'})
        }
        else{
            this.setState({errorMessage: ''})
        }
       
        this.setState({input: event.target.value})
        
        
    }

    render() {
        return (
            <div>
                <input id="test" onChange={this.handleChange.bind(this)} value={this.state.input} type="text"/>
                <small>{this.state.errorMessage}</small>
            </div>
        )
    }
}
