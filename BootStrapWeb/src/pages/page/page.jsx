import React, { Component } from "react";
import Banner from '@c/Banner/Banner';
import Content from '@c/Content/Content';
import axios from 'axios';

export default class Page extends Component {
    constructor (props){
        super(props);
        this.state = {
            data: [],
            // url:'./data/start.json',
            // title:'Getting started',
            // intro: 'An overview of Bootstrap, how to download and use, basic templates and examples, and more.'
        }
    }
    componentWillMount (){
        // axios.get('./data/start.json')
        axios.get(this.props.url)
        .then(({data}) => this.setState({data}))
    }
    componentDidUpdate(props){
        if(props.page !== this.props.page){
            axios.get(this.props.url)
                 .then(({data}) => this.setState({data}))
        }

    }
    render (){
        let { data } = this.state;
        let { title, intro} = this.props;
            
        return (
            <div>
                {/* <Banner title='Getting started' intro='An overview of Bootstrap, how to download and use, basic templates and examples, and more.'></Banner> */}
                <Banner title={title} intro={intro}></Banner>
                <Content data={data}></Content>
            </div>
        )
    }
    
}

Page.defaultProps = {
    title:'',
    intro:'',
    url:'',
    show:false
}