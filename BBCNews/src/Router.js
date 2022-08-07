import React, { Component } from 'react';
import App from './App';

export default  class Router extends Component {
    render (){
        return (
            <NativeRouter>
                <App></App>
            </NativeRouter>
        )
    }

}