import React, { Component } from 'react'

export default class Dropdown extends Component {
    constructor(){
        super();
        this.state = {show : false}
    }

    handleClick(){
        console.log('click button')
        this.setState({show: !this.state.show})
    }

    render() {
        return (
            <div className="dropdown">
            <button onClick={this.handleClick.bind(this)} className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown button
            </button>
            <ul className={this.state.show?"dropdown-menu show":"dropdown-menu"} aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
            </div>
        )
    }
}
