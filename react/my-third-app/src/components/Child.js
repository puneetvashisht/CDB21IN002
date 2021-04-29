import React, { Component } from 'react'

export default class Child extends Component {

    handleClick(){
        var str = this.props.message;
        var revStr = str.split('').reverse().join('')
        this.props.onChildChange(revStr)
    }


    render() {
        return (
            <div>
               <h2>Child Component</h2> 
               <h3>{this.props.message}</h3>
                <button onClick={this.handleClick.bind(this)}>Change</button>
            </div>
        )
    }
}
