// import React, Componet
import React, { Component } from 'react'
import Badge from './Badge';
import './Card.css';

export default class Card extends Component {

    constructor(){
        super();
        this.state = {message: ''}
    }

    deleteCourse(){
       
            fetch('http://localhost:3004/courses/'  + this.props.id, {
                method: "DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
              console.log(data);
              this.setState({message: 'Data successfully deleted!!'})
              
            })
        
    }

    render() {
        return (
            <>
            {/* <div class="alert alert-success" role="alert">
            {this.state.message}
            </div> */}
            <div class="card card-width">
            <img src="https://via.placeholder.com/150"  class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{this.props.caption || 'Default'}</h5>
                <p class="card-text">{this.props.desc}</p>
                <p class="card-text">{this.state.message}</p>
                <Badge caption="Votes" />
                <button onClick={this.deleteCourse.bind(this)} class="btn btn-danger"> X </button>
                
            </div>
            </div>
            </>
        )
    }
}



// create a class with render method

// export class