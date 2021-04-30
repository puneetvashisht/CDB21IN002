import React, { Component } from 'react'

export default class City extends Component {


    constructor(props){
        super();
        this.state = {countries: {
          "India" : ["Delhi", "Mumbai"],
          "US": ["New York", "Washington"]  
        }}  
        
    }

    handleClick(){
        // Pass value to parent "New Delhi"
        this.props.cityChange("New Delhi")

    }

    render() {
        return (
            <div>
                <h2>City</h2>

                <p>{this.props.country}</p>
                
                <p>{this.state.c}</p>

                <button onClick={this.handleClick.bind(this)}>Change City</button>
            </div>
        )
    }
}
