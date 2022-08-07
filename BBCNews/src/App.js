import React, { Component } from 'react';

import { View, Text } from 'react-native';

import { Route, Switch, Link } from 'react-router-native';

import Home from './pages/Home';
import Home from './pages/detail';
import Home from './pages/Comments';
import Comments from './pages/Comments';


export default class App extends Component {
    render (){
        return (
            <View>
                <Text>App Part</Text>
                <Link path='/' component={Home}></Link>
                <Link path='/detail/:id' component={Detail}></Link>
                <Link path='/comments/:id' component={Comments}></Link>
                <Switch>
                   <Route path='/' component={Home}></Route>
                   <Route path='/detail/:id' component={Detail}></Route>
                   <Route path='/comments/:id' component={Comments}></Route>

                </Switch>
            </View>
        )
    }
}
