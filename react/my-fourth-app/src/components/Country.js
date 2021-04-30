import React, { Component } from 'react'
import City from './City'

export default class Country extends Component {

    constructor(){
        super();
        this.state = {country: ''}
        
    }

    parentMethod(city){
        console.log('parent component: ' , city)
    }

    handleCountryChange(event){
        console.log(event.target.value);
        this.setState({country: event.target.value})
    }

    
    render() {      
        return (
            <div>
                <h2>Country</h2>
                <input type="text" onChange={this.handleCountryChange.bind(this)} value={this.state.country} />
                
                <City country={this.state.country} cityChange={this.parentMethod.bind(this)} ></City>
            </div>
        )
    }
}
