import React, { Component } from 'react';
import store from './redux/store';
import {ceactAdd1Action, ceactAdd2Action} from './redux/action';
class count extends Component {
    state= {

    }

    componentDidMount(){
        store.subscribe( () =>{
            this.setState({})
        })
    }

    add1 = () => {
        const {value} = this.select;
        store.dispatch({type:'add1', data:value*1})
    }

    add2 =() => {
        const { value }= this.select;
        store.dispatch({type:'add2', data:value*2})
    }
    add3 =() => {
        const { value} = this.select;
        const count = store.getState();
        if(count%2 !==0){
            store.dispatch({type:'add1', data:value*1})
        } else {
            alert('不符合奇数要求')
        }
    }

    add4 =() => {
        const { value } = this.select;
        setInterval(() => {
            store.dispatch({type:'add1', data: value*1})
        }, 2000)

    }


    render(){
        return (
         <div>
             <h4>{store.getState()}</h4>
             <select ref={(c) => {this.select = c }}>
                 <option value="1">1</option>
                 <option value="2">2</option>
                 <option value="3">3</option>
                 <option value="4">4</option>
             </select>

             <button onClick={this.add1}>+</button>
             <button onClick={this.add2}>_</button>
             <button onClick={this.add3}>当前求和为奇数再加</button>
             <button onClick={this.add4}>异步加</button>
         </div>
        )
    }
}

export default count;