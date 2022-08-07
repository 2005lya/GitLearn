import React , { Component} from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';

// let Observer = (function (){
//     let _msg = {};
//     return {
//         on(type, fn){
//             if(_msg[type]){
//                 _msg[type].push(fn)
//             } else{
//                 _msg[type]= [fn]
//             }
//         },
//         trigger(type, ...args){
//             _msg[type] && _msg[type].forEach(fn => fn(...args))


//         }
//     }
// })()




// class App extends Component {
//     sendMessage(){
//         Observer.trigger('subNum', 2)
//     }
//     render(){
//         return (
//             <div>
//                 <button onClick={e => this.sendMessage(e)}>-2</button>
//                 <hr />
//                 <AddNum></AddNum>
//                 <hr />
//                 <ShowNum></ShowNum>
//             </div>
//         )
//     }
// }

// class AddNum extends Component {
//     render(){
//         return (
//             <div>
//                 <button onClick={e => Observer.trigger('addNum', 5)}>+5</button>
//             </div>
//         )
//     }
// }

// class ShowNum extends Component {
//     constructor(props){
//         super(props);
//         this.state= {
//             num:0
//         }
//     }
//     componentDidMount(){
//         Observer.on('addNum', num => {
//             this.setState({num:this.state.num + num})
//         })
//         Observer.on('subNum', num => {
//             this.setState({num: this.state.num - num })
//         })
//     }
//     render(){
//         return (
//             <div>
//                 <h1>{'num:'+ this.state.num}</h1>
//             </div>
//         )
//     }
// }

// render(<App></App>, app)



// import { connect, Provider} from 'react-redux';


// const ADD_NUM = "ADD_NUM";
// const DELETE_NUM = 'DELETE_NUM';


// //action

// let addNum5 = { type:ADD_NUM, data:5};
// let deleteNum2 = { type: DELETE_NUM, data:2};

// //reducer

// function reducer(state = 0, action){
//     switch(action.type){
//         case ADD_NUM:
//             state += action.data;
//             break;
//         case DELETE_NUM: 
//             state -= action.data;
//             break;
//         default:
//             ;
//     }
//     return state;
// }

// // store

// let store = createStore(reducer)



// class App extends Component {
//     sendMessage(){
//         this.props.dispatch(deleteNum2)
//     }
   
//     render(){
//         console.log('App',this.props)
//         let { state, num} = this.props 
//         return (
//             <div>
//                 <button onClick={e => this.sendMessage(e)}>-2</button>
//                 <hr />
//                 {/* <AddNum></AddNum> */}
//                 <DealAddNum></DealAddNum>

//                 <hr />
//                 <ShowNum state= {state} num = {num}></ShowNum>
//             </div>
//         )
//     }
// }

// class AddNum extends Component {
//     render(){
//         console.log('addnum',this.props)
//         let { dispatch, addNum } = this.props;
//         return (
//             <div>
//                 <button onClick={e => dispatch(addNum5)}>+5</button>
//                 <button onClick={e => addNum(10)}>+10</button>
//                 <button onClick={e => addNum(20)}>+20</button>
//             </div>
//         )
//     }
// }

// class ShowNum extends Component {
//     render(){
//         console.log('shownum',this.props)
//         return (
//             <div>
//                 <h1>{'num:' + this.props.state}</h1>
//                 <h1>{'num*2:' + this.props.num}</h1>
//             </div>
//         )
//     }
// }

// let dealFn = connect(
//     state =>  ({
//             state,
//             num: state*2
//         }),
//     dispatch => ({
//         dispatch,
//         addNum(data){
//             dispatch({type:ADD_NUM, data})
//         }
//     })
// )

// let DealApp = dealFn(App)
// let DealAddNum = dealFn(AddNum)

// render(
//     <Provider store={store}>
//         <DealApp></DealApp>
//     </Provider>
//     , app)



// import * as R from 'react-router-dom';
// console.log(R)
import { Route , Routes, HashRouter, BrowserRouter, Switch, Redirect, Link} from 'react-router-dom'


class App extends Component {
    render(){
        return (
            <div>
                <Header></Header> 

                <Switch>

                <Route path='/'  exact component={Home}></Route>
               
               <Route path='/list/:page' component={List}></Route>

               <Route path='/detail/' component={Detail}></Route>
               <Redirect from='/ickt' to = '/detail/ickt'></Redirect>
               <Route path='*' component={Home}></Route>

                </Switch>
                
            </div>
        )
    }
}

class Header extends Component {
    render(){
        return (
            <div>
                <h2>header part</h2>
                {/* <Link to='/'>home</Link>
                <Link to='/list/33'>list</Link>
                <Link to='/detail/33'>detail</Link> */}
                
            </div>
        )
    }
}

class Home extends Component {
    render(){
        return (
            <div>
                <h2>home page</h2>
            </div>
        )
    }
}

class List extends Component {
    render(){
        return (
            <div>
                <h2>list part</h2>
            </div>
        )
    }
}

class Detail extends Component {
    render(){
        return (
            <div>
                <h1>detail part</h1>
                <Demo></Demo>
            </div>
        )
    }
}

class Demo extends Component {
    render(){
        return (
            <div>
                <h1>demo part</h1>
            </div>
        )
    }
}

render(<HashRouter>
    <App></App>
</HashRouter>
, app)

// render(<BrowserRouter><App></App></BrowserRouter>, app)