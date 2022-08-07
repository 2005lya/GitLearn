import React, { Component } from "react";
import './Banner.less';

export default class Banner extends Component {
    render (){
        let { title, intro } = this.props;
        return (
            <div className="banner">
                <div className="container">
                    <h1>{title}</h1>
                    <p>{intro}</p>
                </div>
            </div>
        )
    }
    
}