import React, {Component} from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import './skin.less';
 class Skin extends Component {
     constructor (props){
         super(props);
         this.state = {
             data:[]
         }
     }
     componentDidMount(){
         axios.get('/data/skin.json')
               .then(({data}) => {
                   this.setState({data})
               })
     }
     changeBg (id, e){
         document.body.style.backgroundImage = `url(./img/${id}.jpg)`;
         

     }
     createList(){
         return this.state.data.map((item) => 
         <li key={item.id} onClick ={e => this.changeBg(item.id)} data-id={item.id}>
             <img src={'./img/'+item.src} alt="" />
             <p>{item.title}</p>
         </li>)
     }
     render (){
         return (
             <ul className='skin'>{this.createList()}</ul>
         )
     }
 }

 render (<Skin></Skin>,app)
