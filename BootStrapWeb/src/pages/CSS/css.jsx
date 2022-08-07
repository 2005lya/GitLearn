
// import React, { Component } from 'react';
// import Banner from '@c/Banner/Banner';
// import Content from "@c/Content/Content";
// import axios from 'axios';

// export default class Css extends Component {
//     constructor (props){
//         super(props);
//         this.state = {
//                  data:[],
//                 title : 'CSS',
//                 intro: 'Global CSS settings, fundamental HTML elements styled and enhanced with extensible classes, and an advanced grid system.'
            
//         }
//     }
//     componentWillMount (){
//         axios.get('/data/css.json')
//              .then(({data}) => this.setState({data}))
//     }
//     render (){
//         let { title, data, intro} = this.state;
//         let { show } = this.props;

//         return (
//             <div style = {{display: show ? '' : 'none'}}>
//                 <Banner title= {title} intro = {intro}></Banner>
//                 <Content data = {data}></Content>
//             </div>
//         )
//     }

// }

import Start from '@p/Start/Start';
export default class Css extends Start {
    constructor (props){
        super(props);
        this.state = {
            title:'CSS',
            intro: 'Global CSS settings, fundamental HTML elements styled and enhanced with extensible classes, and an advanced grid system.',
            data:[],
            url:'/data/css.json'
        }

    }
}
