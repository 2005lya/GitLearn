import React, { Component } from 'react';

import { View, Text } from 'react-native';

// import { Route, Switch, Link } from 'react-router-native';
import { Route, Switch} from 'react-router-native';
import Header from './components/Header'

import Home from './pages/Home';
import Detail from './pages/Detail';
import Comments from './pages/Comments';



export default class App extends Component {
    render (){
        return (
            <View>
                {/* <Link to='/'><Text>Home</Text></Link>
                <Link to='/detail/1'><Text>Detail</Text></Link>
                <Link to='/comments/1'><Text>Comments</Text></Link> */}

                <Header 
                // leftContent = 'Back'
                rightContent = 'Login'
                onLeftClick = {e => this.props.history.go(-1)}
                onRightClick = { e => console.log('right')}
                >
                    <Text>ABC NEWS</Text>
                </Header>

                <Switch>
                   <Route path='/' component={Home} exact></Route>
                   <Route path='/detail/:id' component={Detail}></Route>
                   <Route path='/comments/:id' component={Comments}></Route>
                </Switch>
            </View>
        )
    }
}
