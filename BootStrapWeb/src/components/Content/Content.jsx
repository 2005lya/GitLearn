import React, { Component } from "react";
import Article from '@c/Article/Article';
import Aside from '@c/Aside/Aside';

export default class Content extends Component {
    render (){
        let { data } = this.props;

        return (
            <div className="Content container" style={{display: 'flex'}}>
                <Article data = {data}></Article>
                <Aside data = {data}></Aside>
            </div>
        )
    }
    
}