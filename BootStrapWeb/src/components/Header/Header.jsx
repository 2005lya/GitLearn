import React, { Component } from 'react';
import './Header.less';


export default class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            cls:props.page
        }
    }
    changePage(cls){
        this.setState({cls}),
        this.props.method(cls)
    }
    render(){
        let { cls }= this.state;
        return (
           <div className="ickt-header nav-bar">
               <div className="container">
                   <div className="navbar-header"><a href="" className="navbar-brand" onClick ={this.changePage.bind(this, 'home')}>Bootstrap</a></div>
                   <ul className="navbar-nav nav nav-pills">
                       <li><a href="javascript:'void(0)" className={cls === 'start' ? 'choose' : ''} onClick ={this.changePage.bind(this, 'start')}>Getting started</a></li>
                       <li><a href="javascript:'void(0)" className={cls === 'css' ? 'choose' : ''} onClick ={this.changePage.bind(this, 'css')}>CSS</a></li>
                       <li><a href="javascript:'void(0)" className={cls === 'component' ? 'choose' : ''} onClick ={this.changePage.bind(this, 'component')}>Components</a></li>
                       <li><a href="javascript:'void(0)" className={cls === 'javascript' ? 'choose' : ''} onClick ={this.changePage.bind(this, 'javascript')}>JavaScript</a></li>
                       <li><a href="javascript:'void(0)" className={cls === 'marker' ? 'choose' : ''} onClick ={this.changePage.bind(this, 'marker')}>Customize</a></li>
                   </ul>
                   <ul className="navbar-nav nav nav-pills pull-right">
                       <li><a href="">Blog</a></li>
                   </ul>
               </div>
           </div>
        )
    }
}