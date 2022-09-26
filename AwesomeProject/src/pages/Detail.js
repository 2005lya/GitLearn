import React, { Component } from 'react';

import { View, Text, ScrollView, Button, Image, StyleSheet } from 'react-native';
let style = StyleSheet.create({
    title:{
        padding:10,
        paddingTop:10,
        fontSize:20,
        color:'#000',
        fontWeight:'bold'

    },
    states: {
        display:'flex',
        flexDirection:"row",
        padding: 10

    },
    time: {
        flex:1,
        fontSize:14

    },
    comments: {
        fontSize:14

    },
    image : {
        width:'100%',
        height:300

    },
    content: {
        padding: 10,
        fontSize:14,
        lineHeight:24,


    },
    btn: {
        margin:10,
        marginTop:20,
        marginBottom:100


    }
})

export default class Detail extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: {}
        }

    }
    componentWillMount(){
        fetch("http://localhost:8081/detail.json?id=" + this.props.match.params.id)
             .then( res => res.json())
             .then(data => this.setState({data}))

    }
    render (){
        let { data } = this.state;
        return (
            <ScrollView>
                <Text style={style.title}>{data.title}</Text>
                <View style={style.states}>
                    <Text style={style.time}>{data.time}</Text>
                    <Text style={style.comments}>{'comments:' + data.comment}</Text>
                </View>
                <Image  style={style.image} source={{uri:'http://localhost:8081' + data.img}}></Image>
                <Text style={style.content}>{data.content}</Text>
                <View style={style.btn}>
                <Button   title='show more comments' onPress={ e => this.props.history.push('/comments/'+ data.id)}></Button>
                </View>
                
            </ScrollView>
        )
    }
}
