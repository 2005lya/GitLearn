import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {Link} from 'react-router-native';
let style = StyleSheet.create({
    container : {
        padding:10,
        borderBottomWidth:1,
        borderBottomColor:'#ccc',
        borderBottomStyle: 'solid',
        display:'flex',
        flexDirection:'row'
    },
    image: {
        marginTop:4,
        width:75,
        height:60,
    },
    content : {
        flex:1,
        position:'relative',
        marginLeft:10
    },
    title : {
        fontSize:14,
        fontWeight: 'bold',
        whiteSpace:'nowrap',
        textOverflow: 'ellipsis',
        color:'#000'
    },

    intro: {
        fontSize:12,
        color:'#666'
    },
    type: {
        position:'absolute',
        left:'70%',
        bottom: 0,
        color: '#888',
        fontSize:12,
        textOverflow: 'ellipsis',
    }

})

export default class NewsItem extends Component {
    render (){
        let { data } = this.props;
        return (
           <Link to = {'./detail/' + data.id}>
               <View style= {style.container}>
                   <Image style= {style.image} source= {{uri:'http://localhost:8081' + data.img}}></Image>
                   <View style= {style.content}>
                       <Text style= {style.title}>{data.title}</Text>
                       <Text style= {style.intro}>{data.content + '...'}</Text>
                       <Text style= {style.type}>{data.type}</Text>
                   </View>
               </View>
           </Link>
        )
    }
}