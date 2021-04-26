import React, { Component } from 'react'

class Badge extends Component{

    constructor(){
        super();
        this.state = {count: 0}

        // setTimeout(()=>{
        //     this.setState({count: 10})
        // }, 5000)
    }

    handleClick(){
        console.log('click event fired..', this.props.caption)
        // this.props.caption = "Test"
        this.setState({count: this.state.count+1})

        // Wrong way
        // this.state = {count: this.state.count+1};
    }

    render(){
        return (
            <button type="button" onClick={this.handleClick.bind(this)} className="btn btn-primary">
                 {this.props.caption}  <span className="badge bg-secondary">{this.state.count}</span>
            </button>    
        )
    }

}

// function Badge(){
//     return (
//         <button type="button" class="btn btn-primary">
//           Notifications <span class="badge bg-secondary">4</span>
//       </button>
//     )
// }

export default Badge;