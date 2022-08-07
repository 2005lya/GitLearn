import React, { Component } from "react";
import './Article.less';

export default class Article extends Component {

    createList(){
        return this.props.data.map(item => (
            <div className="item" key = {item.id} id={item.id}>
                <h2>{item.title}</h2>
                <p>{ item.content}</p>
            </div>
        ))
    }
    render (){
        return (
            <div className="article">{ this.createList()}</div>
        )
    } 
}

Article.defaultProps =  {
    data:[]
}