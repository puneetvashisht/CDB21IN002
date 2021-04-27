// import React, Componet
import React, { Component } from 'react'
import Badge from './Badge';
import './Card.css';

export default class Card extends Component {
    render() {
        return (
            <div class="card card-width">
            <img src="https://via.placeholder.com/150" class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{this.props.caption || 'Default'}</h5>
                <p class="card-text">{this.props.desc}</p>
                <Badge caption="Votes" />
            </div>
            </div>
          
        )
    }
}



// create a class with render method

// export class