import React, { Component } from 'react'

// export default class Clock extends Component {

//     render() {
//         return (
//             <div>
//                Time Now is:  {this.props.date.getHours()} : {this.props.date.getMinutes()} : {this.props.date.getSeconds()} 
//             </div>
//         )
//     }
// }


export default function Clock(props){
    return (
        <div>
        Time Now is:  {props.date.getHours()} : {props.date.getMinutes()} : {props.date.getSeconds()} 
     </div> 
    )
}