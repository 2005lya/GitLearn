import React, { Component } from "react";
import './Aside.less'

export default class Aside extends Component {
    createList(){
        return this.props.data.map(item => (
            <li key= {item.id}><a href={ '#' + item.id}>{item.title}</a></li>
        ))
    }
    render (){
        return (
            <div className="aside">
                <ul className="nav">{this.createList()}</ul>
            </div>
        )
    }
}
Aside.defaultProps = {
    data:[]
}