import React, { Component } from 'react'

export default class DropdownItem extends Component {

    handleClick(){
        this.props.itemChange(this.props.title);
    }

    render() {
        return (
            <li ><a onClick={this.handleClick.bind(this)} className="dropdown-item" href="#">{this.props.title}</a></li>
        )
    }
}
