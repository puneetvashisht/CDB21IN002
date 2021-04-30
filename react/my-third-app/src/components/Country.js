import React, { Component } from 'react'
import City from './City'

export default class Country extends Component {
    render() {
        return (
            <div>
                <h2>Country</h2>
                <City></City>
            </div>
        )
    }
}
