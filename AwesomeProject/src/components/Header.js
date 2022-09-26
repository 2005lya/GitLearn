import React, { Component } from 'react';
import { Fragment } from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
let style = StyleSheet.create({
    header : {
        height:50,
        display:'flex',
        flexDirection:'row',
        backgroundColor: 'red'
    },
    title : {
        flex:1
    },
    titleText : {
        lineHeight:50,
        fontSize:20,
        color:'#fff',
        textAlign:'center'
    },
    left : {
        width:60,
        position:'relative'
    },
    leftText: {
        textAlign:'center',
        fontSize:16,
        color:'#fff',
        lineHeight:50,
    },
    arrow1 : {
        position:'absolute',
        width:0,
        borderWidth:10,
        borderStyle:'solid',
        borderLeftColor:'transparent',
        borderTopColor:'transparent',
        borderBottomColor:'transparent',
        borderRightColor:'#fff',
        top:15,
        left:7
    },
    arrow2 : {
        position:'absolute',
        width:0,
        borderWidth:10,
        borderStyle:'solid',
        borderLeftColor:'transparent',
        borderTopColor:'transparent',
        borderBottomColor:'transparent',
        borderRightColor:'red',
        top: 15,
        left:10
    }
})
export default class Home extends Component {
    render (){
        let { leftContent, rightContent, children, onLeftClick, onRightClick} = this.props
        console.log(leftContent)
        return (
            <View style={style.header}>
                <View style={style.left} onTouchEnd = { onLeftClick }>
                    {leftContent ? 
                        <Text style={style.leftText} >{leftContent}</Text> :
                        <Fragment>
                            <View style={style.arrow1}></View>
                            <View style={style.arrow2}></View>
                        </Fragment>
                    }
                </View>
                <View style={style.title}><Text style={style.titleText}>{children}</Text></View>
                <View style={style.left}><Text style={style.leftText} onTouchEnd={ onRightClick }>{rightContent}</Text></View>
            </View>
        )
    }
}

Header.defaultProps = {
    leftContent:'',
    rightContent:'',
    onLeftClick() {},
    onRightClick(){}
}