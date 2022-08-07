import React, { Component } from "react";
import Banner from '@c/Banner/Banner';
import Content from '@c/Content/Content';
import axios from 'axios';

export default class Start extends Component {
    constructor (props){
        super(props);
        this.state = {
            data: [],
            url:'./data/start.json',
            title:'Getting started',
            intro: 'An overview of Bootstrap, how to download and use, basic templates and examples, and more.'
        }

    }
    componentWillMount (){
        // axios.get('./data/start.json')
        axios.get(this.state.url)
        .then(({data}) => this.setState({data}))
    }
    render (){
        let { show } = this.props;
        let { title, intro, data } = this.state;
        return (
            <div style = {{ display: show ? '' : 'none'}}>
                {/* <Banner title='Getting started' intro='An overview of Bootstrap, how to download and use, basic templates and examples, and more.'></Banner> */}
                <Banner title={title} intro={intro}></Banner>
                <Content data={data}></Content>
            </div>
        )
    }
    
}