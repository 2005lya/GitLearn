import React, { Component } from 'react';

import { View, Text , FlatList} from 'react-native';
import NewsItem from '../components/NewsItem';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state= {
            data:[]
        }

    }
    componentWillMount(){
        fetch('http://localhost:8081/data.json')
             .then(res => res.json())
             .then(data => this.setState({data}))
    }
    render (){
        return (
            // <View>
            //     <Text>Home Page</Text>
            // </View>
            <FlatList data={this.state.data}
            // renderItem={({item, key}) => <View><Text>{item.title}</Text></View>}
            renderItem={({item, key}) => <NewsItem data={item}></NewsItem>}
            keyExtractor={item => item.id}
            
            ></FlatList>
        )
    }
}
