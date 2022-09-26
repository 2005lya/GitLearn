import React, { Component } from 'react';

import { View, Text, TextInput, Button, StyleSheet , FlatList} from 'react-native';
import Discuss from '../components/Discuss'
let style = StyleSheet.create({
    input : {
        padding:20
    },
    userInput : {
        height:100,
        padding:10,
        borderWidth:1,
        borderColor:'#ccc',
        borderStyle:'solid'
    },
    btns: {

        display:'flex',
        flexDirection:'row',
        marginTop:20
    },
    btnsLeft:{
        flex:1

    },
    btnsRight:{
        width:80

    }

})

export default class Comments extends Component {
    constructor(){
        super();
        this.state={
            id:0,
            list:[],
            msg:''
        }
    }
    submitData(){
        let { msg, list , id } = this.state;
        if(/^\s*$/.test(msg)){
            return alert('please input the comment!')
        }
        
        let sendData = {
            id,
            content:msg,
            user:'ickt',
            time:'just now'
        }

        fetch('http://localhost:8081/addComment.json', {
            // method:'POST',
            data:sendData
        }).then(res => res.json()) 
        .then(data => {
            if(data.errno === 0){
                // list.push(sendData);
                list.unshift(sendData)
                this.setState({list, msg:''})

            }
        })
    }
    componentWillMount(){
        fetch('http://localhost:8081/comments.json?id=' + this.props.match.params.id)
        .then(res => res.json())
        .then(data => this.setState(data))
    }
    render (){
        return (
            <View>
                <View style={style.input}>
                    <TextInput style={style.userInput} value = {this.state.msg } onChangeText={msg => this.setState({msg})} multiline></TextInput>
                    <View style= {style.btns}>
                        <View style={style.btnsLeft}></View>
                        <View style={style.btnsRight}><Button title='submit' onPress={ e => this.submitData(e)}></Button></View>
                    </View>
                </View>
                <FlatList
                data = { this.state.list}
                renderItem={({item}) => <Discuss data={item}></Discuss>}
                keyExtractor = {(item, index) => index}
                ></FlatList>
            </View>
        )
    }
}
