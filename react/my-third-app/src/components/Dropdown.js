import React, { Component } from 'react'
import DropdownItem from './Dropdown.Item';

export default class Dropdown extends Component {
    constructor(){
        super();
        this.state = {show : false, courses: [
            {title: "Angular"},
            {title: "React"},
            {title: "EmberJS"}
        ]}
    }

    handleClick(){
        console.log('clic button', this.state.show)
        this.setState({show: !this.state.show})
    }

    handleItemChange(selectedValue){
        console.log('in the parent .. dropdown', selectedValue)
        this.setState({caption: selectedValue, show: false});
    }

    render() {
        var courseList = this.state.courses.map((c, i)=>{
           return <DropdownItem key={i} title={c.title} itemChange={this.handleItemChange.bind(this)}></DropdownItem>
        })
        return (
            <div className="dropdown">
            <button onClick={this.handleClick.bind(this)} className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                {this.state.caption ||'Dropdown button'}
            </button>
            <ul className={this.state.show?"dropdown-menu show":"dropdown-menu"} aria-labelledby="dropdownMenuButton1">
               {courseList}
            </ul>
            </div>
        )
    }
}
