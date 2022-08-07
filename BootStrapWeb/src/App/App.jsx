import React,{ Component } from 'react';
import Header from '@c/Header/Header';
import Home from '@p/Home/Home';
// import Start from '@p/Start/Start';
// import CSS from '@p/CSS/css';
import Page from '@p/Page/Page';
import './App.less'
// import render from 'react-dom';
import PropTypes from 'prop-types';

export default class App extends Component{
    constructor(props){
        super(props);
        this.state={
            page: props.page
        }
    }
    renderPage (){
        let { page } = this.state;
        switch(page) {
            case 'start' :
                return  <Page page={ page } title='Getting started' intro = 'An overview of Bootstrap, how to download and use, basic templates and examples, and more.' url = './data/start.json'></Page>;
            case 'css' :
                return  <Page page={ page } title = 'CSS' intro = 'Global CSS settings, fundamental HTML elements styled and enhanced with extensible classes, and an advanced grid system.' url = '/data/css.json'></Page>;
            case 'component' :
                return  <Page page={ page } title = 'component' intro = 'Over a dozen reusable components built to provide iconography, dropdowns, input groups, navigation, alerts, and much more.' url = '/data/component.json'></Page>;
            case 'javascript' :
                return  <Page page={ page } title = 'JavaScript' intro = "Bring Bootstrap's components to life with over a dozen custom jQuery plugins. Easily include them all, or one by one." url = '/data/javascript.json'></Page>;
            case 'marker' :
                return  <Page page={ page } title = 'Customize and download' intro = "Customize Bootstrap's components, Less variables, and jQuery plugins to get your very own version. Requires IE9+ or latest Safari, Chrome, or Firefox." url = '/data/marker.json'></Page>;
            default:
                return <Home page={ page }></Home>
                                    
        }
        }
    render (){
        let { page } = this.state;
        return (
            <div>
                {/* <h1 >Header part</h1> */}
                <Header page={page} method={page => this.setState({page})}></Header>
                {/* <Home show={page === 'home'}></Home> */}
                { this.renderPage()}

                {/* <Start show={page === 'start'}></Start> */}
                {/* <Page show={page === 'start'} title='Getting started' intro = 'An overview of Bootstrap, how to download and use, basic templates and examples, and more.' url = './data/start.json'></Page> */}
                {/* <CSS show={ page=== 'css'}></CSS> */}
                {/* <Page show={ page=== 'css'} title = 'CSS' intro = 'Global CSS settings, fundamental HTML elements styled and enhanced with extensible classes, and an advanced grid system.' url = '/data/css.json'></Page>
                <Page show={ page=== 'component'} title = 'component' intro = 'Over a dozen reusable components built to provide iconography, dropdowns, input groups, navigation, alerts, and much more.' url = '/data/component.json'></Page>
                <Page show={ page=== 'javascript'} title = 'JavaScript' intro = "Bring Bootstrap's components to life with over a dozen custom jQuery plugins. Easily include them all, or one by one." url = '/data/javascript.json'></Page>
                <Page show={ page=== 'marker'} title = 'Customize and download' intro = "Customize Bootstrap's components, Less variables, and jQuery plugins to get your very own version. Requires IE9+ or latest Safari, Chrome, or Firefox." url = '/data/marker.json'></Page>
                 */}
                {/* <h1 style={{display: page === 'css'? '' : 'none' }}>CSS</h1> */}
                {/* <h1 style={{display: page === 'component'? '' : 'none' }}>component</h1>
                <h1 style={{display: page === 'javascript'? '' : 'none' }}>javascript</h1>
                <h1 style={{display: page === 'marker'? '' : 'none' }}>marker</h1> */}
            </div>
        )
    }
} 
App.defaultProps = {
    page: 'home'
}

// App.PropTypes = {
//     page:PropTypes.string.isRequired

// }
