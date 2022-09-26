import React , { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
let style = StyleSheet.create({
    container : {
        paddingTop:10,
        paddingBottom:10,
        borderBottomColor:'#ccc',
        borderBottomWidth:1,
        borderBottomStyle:'solid',
        marginLeft:10,
        marginRight:10
    },
    user : {
        color:'#000',
        fontSize:15,
        paddingBottom: 8,
        paddingTop:4,
    },
    content: {
        fontSize:16,
        color:'#333',
        lineHeight:30
    },
    time : {
        fontSize:14,
        color:"#999",
        paddingTop:8
    }
})

export default class Discuss extends Component {
    render(){
        let { data } = this.props
        return (
            <View style={style.container}>
                <Text style={style.user}>{data.user + ' : '}</Text>
                <Text style={style.content}>{data.content}</Text>
                <Text style={style.time}>{data.time}</Text>
            </View>
        )
    }

}
Discuss.defaultProps = {
    data: {}
}