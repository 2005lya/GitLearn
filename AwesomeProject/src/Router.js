import React, { Component } from 'react';
import App from './App';
import { NativeRouter, Route } from 'react-router-native';

export default  class Router extends Component {
    render (){
        return (
            <NativeRouter>
                <Route path='/' component={App}></Route>
            </NativeRouter>
        )
    }

}