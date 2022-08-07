// import * as React from 'react';
// import React from 'react';
import React, { Component, createElement, useLayoutEffect, createContext, PureComponent, Fragment, createRef } from 'react';
// import * as ReactDOM from 'react-dom';
import  { render } from 'react-dom';
import PropTypes from 'prop-types';
import $ from 'jquery';
// console.log(createElement,  ReactDOM);
// let h1 = createElement('h1', {title : 'ickt'}, 'hello');
// console.log(h1)

// render(h1, document.getElementById('app'),  (...args) => {
//     console.log(args, 'success');
// })


// class App extends Component{
//     render (){
        // return createElement(
        //     'ul',
        //     null,
        //     createElement('li', null, 'vedio'),
        //     createElement('li', null, 'iqiyi'),
        //     createElement('li', null, 'youku'),

        // )
//         return (
//             <ul>
//         <li>vedio</li>
//         <li>iqiyi</li>
//         <li>youku</li>
//     </ul>
//         )

//     }
// }

// let app = createElement(App);
// let app = <App></App>

// render(app, document.getElementById('app'))

// let app2 = createElement(App)
// render(app2, document.getElementById('app2'))

// let title = 'ickt'
// class Demo extends Component {
//     render (){
//         return (
//             <div>
//                 {
//                 /*
//                 this is comment
//                 */
//                 }
//                 {/* this is comment */}
//                 <h1>{title}</h1>
//             </div>
//         )
//     }
// }

// render(<Demo></Demo>, app)

// let msg = <a href="javascript:alert(2)">hello</a>

// let data = [1, 2, 3]

// class Demo2 extends Component {
//     componentDidMount(){
//         // console.log(this)
//         this.refs.ickt.style.color='red';
//     }
//     render (){
//         return (
//             <div>
//                 <h1 data-ickt='100' ref='ickt'>ickt2</h1>
//                 <h1>{msg}</h1>
//                 <h1 dangerouslySetInnerHTML={{__html:msg}}></h1>
//                 <ul>
//                     {/* {[
//                         <li key='0'>1</li>,
//                         <li key='1'>2</li>,
//                         <li key='2'>3</li>
//                     ]} */}

//                     {

//                     }
//                 </ul>
//             </div>
//         )
//     }
// }

// render(<Demo2></Demo2>, app)



// class Demo3 extends Component {
//     createList (){
//         return this.props.data.map(item =><li key={item}>{item}</li>)

//     }
//     render (){
//         console.log(this)
//         return (
//             <ul>
//                 {this.createList()}
//             </ul>
//         )
//     }
// } 
// Demo3.defaultProps = {
//     data: ['default data']
// }

// let data = ['video', 'iqiyi', 'youku'];

// render(<Demo3 data={data}></Demo3>, app)
// render(<Demo3 data={['sina', 'tencent', 'netyi']} />, app2)  
// render(<Demo3></Demo3>, app3)


// class Demo4 extends Component {
//     clickBtn (){
//         console.log(this, 111, arguments);
//     }
//     render (){
//         return (
//             <div>
//                 <button onClick = {this.clickBtn}>btn-1</button>
//                 <button>btn-2</button>
//                 <button>btn-3</button>
//                 <button>btn-4</button>
//                 <button>btn-5</button>
//             </div>
//         )
//     }
// }

// render (<Demo4></Demo4>, app)

// class Demo5 extends Component {
//     createList (){
//         return this.props.data.map(item => <li key={item}>{item}</li>)
//     }
//     render () {
//         return <ul>{this.createList()}</ul>
//     }
// }


// function Demo5 (props){
//     // function createList (){
//     //     return props.data.map((item, index) => <li key={index}>{item}</li>)
//     // }
//     return <ul>{props.data.map((item, index) => <li key={index}>{item}</li>)}</ul>

// }

// let Demo5 = (props) => {
//     return <ul>{props.data.map((item, index) => <li key={index}>{item}</li>)}</ul>
// }

// let Demo5 = props => <ul>{props.data.map((item, index) => <li key={index}>{item}</li>)}</ul>
// render (<Demo5 data={['video', 'iqiyi', 'youku']}></Demo5>, app)


// class App extends Component {
//     constructor(props){
//         super(props);
//         console.log(props,111, this.props);
//         this.state = {
//             color: 'red',
//             num : props.num
//         }
//         setTimeout (()=>{
//             // this.props.num = 123
//             this.setState({
//                 color: 'pink'
//             })

//         }, 1000)

//     }
//     render (){
//         return (
//             <div>
//                 <h1>{this.props.num}</h1>
//                 <h1>{this.state.num}</h1>
//                 <h1>{this.state.color}</h1>
//             </div>
//         )
//     }
// }
// render(<App num='100'></App>, app)

// class Toggle extends Component {

//     constructor(props){
//         super(props);
//         this.state= {
//             num : 0
//         }
//     }
//     createItems (item){
//         return item.map((item, index) => <div key={index}>{item}</div>)
//     }
//     createList (){
//         let len = this.props.data.length;
//         return this.props.data.map ((item, index) => <li key={index} style={{
//             display:this.state.num % len === index ? '':'none'
//         }}>{this.createItems(item)}</li>)
//     }
//     changePage(){
//         this.setState({
//             num: ++this.state.num
//         })
//     }
//     render (){
//         return (
//             <div>
//                 <span onClick={e => this.changePage(e)}>change</span>
//                 <ul>{this.createList()}</ul>
//             </div>
//         )

//     }
// }



// render (<Toggle data={[['1. new1'], ['2. news2'], ['3.news'],['4.news4'], ['5.news5']]}></Toggle>, app)
// render (<Toggle data = {[
//     ['new1', 'new2', 'news3', 'new4'],['new5', 'new6', 'news7', 'news8'],['news9', 'news10', 'news11', 'news12']]
// }></Toggle>, app2)


// class Parent extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             num: 200
//         }

//     }
//     parentMethod (...args){
//         console.log(this, 'parent', args)
//     }
//     render (){
//         let msg = 'hello '
//         return (
//             <div>
//                 <h1>parent</h1>
//                 {/* <Child msg= {msg}></Child> */}
//                 {/* <Child color = {this.props.color}></Child> */}
//                 {/* <Child num = {this.state.num}></Child> */}
//                 {/* <Child method={this.parentMethod.bind(this, 'hello')}></Child> */}
//                 {/* <Child method={this.parentMethod.bind(this)}></Child> */}
//                 <Child method={this.parentMethod}></Child>
//                 </div>
//         )
//     }
// }

// class Child extends Component {
//     childMethod(){
//         console.log('child', this);
//         this.props.method();
//     }

//     render (){
//         console.log('child',this.props)
//         return (
//             <div>
//                 {/* <h2 onClick={this.props.method.bind(this, 100, 200)}>child</h2> */}
//                 <h2 onClick={this.childMethod.bind(this)}>child</h2>
//             </div>
//         )
//     }
// }

// render(<Parent color='red'></Parent>, app)


// class Parent extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             msg:''
//         }
//     }
//     // parentMethod (e, ...args){
//     //     console.log(args, e.target.value)
//     // }
//     parentMethod (msg){
//         // console.log(msg)
//         this.setState({msg})
//     }
//     render (){
//         return (
//             <div>
//                 <h1>{'parent'+ this.state.msg}</h1>
//                 <Child method={this.parentMethod.bind(this)}></Child>
//                 {/* <Child method={e => this.parentMethod(e.target.value)}></Child> */}
//                 {/* <Child method={msg => this.setState({msg})}></Child> */}
//             </div>
//         )
//     }
// }

// class Child extends Component {
//     render (){
//         return (
//            <input type="text" onChange={e => this.props.method(e.target.value)}></input>
//  )
//     }
// }

// render(<Parent></Parent>,app)


// class Parent extends Component {
//     constructor (props){
//         super(props);
//         this.state= {
//             msg : ''
//         }
//     }
//     render (){
//         return (
//             <div>
//                 <h1>{'parent:'+ this.state.msg}</h1>
//                 <Child method = {msg => this.setState({msg})}></Child>
//                 <Brother msg= {this.state.msg}></Brother>
//             </div>
//         )
//     }

// }

// class Child extends Component {
//     render (){
//         return (
//             <div>
//                 <h2>child</h2>
//                 <input type="text" onChange={e => this.props.method(e.target.value)} />
//             </div>
//         )
//     }
// }

// class Brother extends Component {
//     render (){
//         return (
//             <div>
//                 <h2>{'brother:'+this.props.msg}</h2>
//             </div>
//         )
//     }
// }

// render (<Parent></Parent>, app)


// let DataContext = createContext ({
//     lang:'Chinese',
//     color:'red'
// })
// let {Provider, Consumer}= DataContext;


// class App extends Component {
//     render (){
//         console.log('app', this)
//         return (
//             <div>
//                 <h1 style = {{color:this.context.color}}>app part - {this.context.lang}</h1>
//                 <Child>
//                     <Ickt></Ickt>
//                 </Child>
//                 <Demo></Demo>
//             </div>
//         )
//     }
// }

// App.contextType = DataContext;

// let Demo = props => <Consumer>{
//     context => {
//         return (
//             <div>
//             <h3 style={{color:context.color}}>demo part - {context.lang}</h3>
//         </div>
//         )
//     }}</Consumer>
//  class Ickt extends Component {
//      render(){
//         console.log('Ickt', this)
//          return (
//              <div>
//                  <h3>ickt part</h3>
//              </div>
//          )
//      }
//  }

//  Ickt.contextType = DataContext;

// class Child extends Component {
//     render (){
//         let {lang, color} = this.context;
//         console.log('Child', this)
//         return (
//             <div>
//                 <h2 style={{color:color}}>child part-{lang}</h2>
//                 <Ickt></Ickt>
//             </div>
//         )
//     }
// }
// Child.contextType = DataContext;

// render (
// <Provider value={{color:'green'}}>
//     <App></App>
// </Provider>
// ,app)




// class App extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//             list:['new1','new2', 'new3']
//         }

//     }
//     componentDidMount(){
//         $('li').css('background', 'pink')
//     }
//     componentDidUpdate(){
//         $('li').css('background', 'pink')
//     }
//     createList(){
//         return this.state.list.map((item, index) => <li key={index}>{item}</li>)
//     }
//     updateView(){
//         this.setState({
//             list:['new4','new5', 'new6','news7']
//         })
//     }
//     render (){
//         return (
//             <div>
//                 <button onClick={e => this.updateView(e)}>change</button>
//                 <ul>{this.createList()}</ul>
//             </div>
//         )
//     }
// }
// render(<App></App>, app)



// class App extends Component {

//     constructor (props){
//         super(props)
//         this.state = {
//             color : ['isRed', 'isGreen']
//         }

//     }
//     showData (){
//         console.log(this.state.color)

//     }

//     changeData(){
//         this.setState({ color:['isBlue','isGreen']})

//     }

//     changeColor(e){
//         // console.log(e.target.options)
//         let options = e.target.options;
//         let color = [];
//         for(let i = 0; i < options.length; i++){
//             if(options[i].selected){
//                 color.push(options[i].value)
//             }
//         }
//         this.setState({color})

//     }
//     render (){
//         return (
//             <div>
//                 <p>
//                     <select value={this.state.color} multiple onChange = { e => this.changeColor(e)}>
//                         <option value="isRed">red</option>
//                         <option value="isGreen">green</option>
//                         <option value="isBlue">blue</option>
//                     </select>
//                 </p>
//                 <p>
//                 <button  onClick = { e => this.showData(e)}>show data</button>
//                 <button onClick = { e => this.changeData(e)}> change data</button>
//                 </p>
//             </div>

//         )
//     }
// }

// render(<App></App>, app)

// console.log(React)
// console.log(createElement)

// var h1 = createElement('h2', { title: 'hello'}, 'ickt');
// // console.log(h1)
// render(h1, app, (...args) => {
//     console.log(args, 'success')
// })

// let msg = '<a href="javascript: alert(1)">hello</a>'

// let data = ['a', 'b', 'c']

// class App extends Component {
//     // componentDidMount(){
//     //     this.refs.ickt.style.color = 'red'
//     // }

//     createList(){
//         // return [
//         //     <li key='0'>好看视频</li>,
//         //     <li key='1'>爱奇艺高清</li>,
//         //     <li key='2'>腾讯视频</li>
//         // ]
//         // return data.map((item, index) => {
            
//         //     return <li key = {index}>{item}</li>
//         // })

//         return data.map((item, index) => <li key = {index}>{item}</li>)
//     }
//     render(){
//         return (
//             <ul>
//                 {/* {this.createList()} */}
                
//                     {
//                     //    [
//                     //     <li key='0'>好看视频</li>,
//                     //     <li key='1'>爱奇艺高清</li>, 
//                     //     <li key='2'>腾讯视频</li>
//                     //    ]
//                     this.createList()
//                     }
                   
//                 {/* <li title='hello' style={{
//                     color: 'red',
//                     backgroundColor: 'pink',
//                     fontSize: 50
//                 }}>好看视频</li>
//                 <li className='aqiyi'>爱奇艺高清</li>
//                 <li data-num = '100' ref='ickt'>腾讯视频</li>
//                 <label htmlFor="usename">input the usename</label>
//                 <input type="text" id='usename' />
//                 <h1 dangerouslySetInnerHTML={{ __html : msg}}></h1> */}

//             </ul>
            
//         )
//     }
// }
// render(<App></App>,app);
// render(createElement(App), app2)
 

// class App extends Component {

//     static get num (){
//         return 100;
//     }
//     static getNum (){
//         return this.num
//     }
//     createList (){
//         return this.props.data.map((item, index) => <li key = {index}>{item}</li>)
//     }
//     render (){
//         console.log(this)
//         return (
//             <ul>{this.createList()}</ul>
//         )

//     }
// }

// App.color = 'red';
// App.getColor = function(){
//     return this.color;
// }
// App.defaultProps = {
//     data:['default data']
// }
// App.propTypes = {
//     data: PropTypes.array.isRequired
// }
// // console.log(App.color, 111, App.getColor())
// console.log(PropTypes)

// let data = ['好看视频', '爱奇艺高清', '腾讯视频'];

// render(<App data = {data}></App>, app )
// render(<App ></App>, app2 )

// class App extends Component {
//     createList(){
//         return this.props.data.map((item, index) => <li key={index}>{item}</li>)
//     }
//     render(){
//         return (
//             <ul>{this.createList()}</ul>
//         )
//     }
// }

// function App(props){
//     // console.log(this, arguments)
//     function createList(){
//         return props.data.map((item, index) => <li key={index}>{item}</li>)

//     }
//     return  <ul>{createList()}</ul>
// }

// function App(props){
//     // console.log(this, arguments)
//     // function createList(){
//     //     return props.data.map((item, index) => <li key={index}>{item}</li>)

//     // }
//     return  <ul>{props.data.map((item, index) => <li key={index}>{item}</li>)}</ul>
// }

// let App = (props) => {
//     return props.data.map((item, index) => <li key={index}>{item}</li>)
// }

// let App = props => props.data.map((item, index) => <li key={index}>{item}</li>)

// render(<App data ={['好看视频', '爱奇艺高清', '腾讯视频']}></App>, app)


// class App extends Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             color: 'red',
//             num: props.num
//         }
//         setTimeout(() => {
//             // this.props.num = 123
//             this.setState({
//                 color: 'green'
//             })
//         }, 1000)
        

//     }
//     render(){
//         console.log(this)
        
//         return (
//             <div>
//                 <h1>{this.props.num}</h1>
//                 <h1>{this.state.num}</h1>
//                 <h1>{this.state.color}</h1>

//             </div>
//         )
//     }
// }

// render (<App num ='100'></App>, app)

// class Toggle extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             num: 0
//         }
//     }
//     createItem(item){
//         return item.map((item, index) => <div key={index}>{item}</div> )
//     }
//     createList(){
//         let len = this.props.data.length;
//         return this.props.data.map((item, index) => 
//         <li key={index} style={{display : this.state.num%len === index? '' : 'none'}}>
//            {this.createItem(item)}
//         </li>
//         )
//     }
//     changePage (){
//         this.setState(
//             {
//                 num : ++this.state.num
//             }
//         )

//     }
//     render (){
//         return (
//             <div>
//                 <span onClick={e => this.changePage(e)}>换一换</span>
//                 <ul>{this.createList()}</ul>
//             </div>

//         )
//     }

// }

// render(<Toggle data = {[
//     ['主任科员做核酸不戴口罩 官方停职'],
//     ['百名孩子游泳后高烧 2人腺病毒阳性热'],
//     ['31省份昨日新增本土98+770热'],
//     ['实体经济恢复向好韧性强热'],
//     ['医保跨省异地就医如何直接结算？新'],
//     ['樊振东缺席比赛被扣1400分被附0分热'],
//     ['4名发小6年后一起考上清华新'],
//     ['北京一男子划皮划艇上不堵车']
// ]}></Toggle>, app)
// render(<Toggle data ={[
//     [ '阿里拟香港纽约双重主要上市', 
//       '房地产专家称坚决不能取消预售制' ,
//     '德国中产家庭排队7小时领救济粮 ',
//     '广东地表温度超70℃' 
//         ],[
//         '油价或迎“三连跌”' ,
//         '郑州城区现罕见“绿色天空” ',
//         '集中供冷要来了？', 
//         '格陵兰岛近期1天流失冰量约60亿吨' 
//         ]
// ]

// }></Toggle>, app2)


// class Parent extends Component {
//     constructor(props){
//         super(props);
//         this.state= {
//             num: 100
//         }
//     }
//     parentMethod(...args){
//         console.log(this, 'parent', args)
//     }
//     render (){
//         return(
//             <div>
//                 <h1>parent</h1>
//                 <Child method={this.parentMethod}></Child>
//             </div>

//         )
//     }
// }

// class Child extends Component {
//     render (){
//         console.log('child', this.props)
//         return (
//             <div>
//                 <h2 onClick={this.props.method.bind(this, 100, 200, 'true', 'hello')}>child</h2>
//             </div>
//         )
//     }
// }

// render(<Parent color='red'></Parent>, app)


// class Parent extends Component {
//     constructor(props){
//         super(props);
//         this.state ={
//             msg: ''

//         }
//     }
//     // parentMethod (e){
//     //     console.log(e.target.value)
//     // }
//     parentMethod (msg){
//         // console.log(msg)
//         this.setState({msg})
//     }
//     render(){
//         return (
//             <div>
//                 <h1>{'parent:' + this.state.msg}</h1>
//                 {/* <Child method= { this.parentMethod.bind(this)}></Child> */}
//                 {/* <Child method= { e => this.parentMethod(e.target.value)}></Child> */}
//                 {/* <Child method= { msg => this.setState({msg.target.value})}></Child> */}
//                 <Child method= { msg => this.setState({msg})}></Child>
//             </div>
//         )
//     }
// }

// class Child extends Component {
//     render(){
//         return (
//             <div>
//                 {/* <input type="text" onChange= {this.props.method}/> */}
//                 <input type="text" onChange={e => this.props.method(e.target.value)} />
//             </div>
//         )
//     }
// }

// render(<Parent></Parent>, app)


// class Parent extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             msg:''
//         }

//     }
//     render(){
//         return (
//             <div>
//                 <h2>{'parent:' + this.state.msg}</h2>
//                 <Child1 method={ msg => this.setState({msg})}></Child1>
//                 <Child2 msg={this.state.msg}></Child2>
//             </div>
//         )
//     }
// }

// class Child1 extends Component {
//     render(){
//         return (
//             <div>
//                 <h2>Child1</h2>
//                 <input type="text" onChange={e => this.props.method(e.target.value)} />
//             </div>
//         )
//     }
// }
// class Child2 extends Component {
//     render(){
//         return (
//             <div>
//                 <h2>{'Child2:' + this.props.msg}</h2>
//             </div>
//         )
//     }
// }
// render(<Parent></Parent>, app)

// let DataContext = createContext({
//     lang: '中文',
//     color:'red'
// })
// console.log(DataContext)
// let{ Provider, Consumer } = DataContext

// class App extends Component {
//     render(){
//         console.log('App', this)
//         // let { consumer, provider} = this.contextType;
//         return (
//         <div>
//             <h1 style={{color:this.context.color}}>app part-{ this.context.lang}</h1>
//             <Child></Child>
//             <Demo></Demo>
//         </div>
//         )
//     }
// }
// App.contextType = DataContext; 
// class Child extends Component {
    
//     render(){
//         //  
//         console.log('child', this)
//         return (
//             <div>
//                 <h2>child part</h2>
//                 <Ickt></Ickt>
//             </div>
//         )
//     }
// }
// Child.contextType = DataContext;

// class Ickt extends Component {
//     render(){
//         console.log('Ickt', this)
//         return (
//             <div>
//                 <h3>ickt</h3>
//             </div>
//         )
//     }
// }
// Ickt.contextType = DataContext;
// let Demo = (...args) => {
//     console.log('demo', this, args)
//     return(
//         <div>
//             <h2>demo</h2>
//         </div>
//     )
// }
// render(<Provider value={{
//     color: 'green',
//     lang:'english'
// }}><App></App></Provider>, app)


// class App extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             num : 100
//         }
//         console.log(222,'constructor', this, arguments)
//     }
//     componentWillMount(){
//         console.log(333,'componentWillMount', this, arguments)

//     }
//     render(){
//         console.log(444, 'render', this, arguments)
//         return (
//             <div>
//                 <h1>app</h1>
//             </div>
//         )
//     }
//     componentDidMount(){
//         console.log(555, 'componentDidMount', this, arguments)

//     }
// }
//  App.defaultProps = {
//      color: 'red',
//  }
//  console.log(111,'defaultProps', App)

// render(<App></App>, app)

// class Slider extends Component {
   
//     // componentDidMount(){
//     //     window.addEventListener('scroll', () => {
//     //         if(screenY > 200){
//     //             this.setState({
//     //                 show: true
//     //             })
//     //         } else {
//     //             this.setState({
//     //                 show:false
//     //             })
//     //         }

//     //     })
//     // }
//     render(){
//         return (
//             <div>
//                 <GoTop></GoTop>
//             </div>
//         )
//     }
// }

// class GoTop extends Component {
//      constructor(props){
//         super(props)
//         this.state= {
//             show: false
//         }

//     }
//     componentDidMount(){
//         window.addEventListener('scroll', () => {
//             if(scrollY > 200){
//                 this.setState({
//                     show: true
//                 })
//             } else {
//                 this.setState({
//                     show:false
//                 })
//             }

//         })
//     }

//     componentWillReceiveProps(){
//         console.log(111, 'componentWillReceiveProps', this, arguments)

//     }

//     shouldComponentUpdate(){
//         console.log(222, 'shouldComponentUpdate', this, arguments);
//         return true


//     }

//     componentWillUpdate(){

//         console.log(333, 'componentWillUpdate', this, arguments)

//     }

//     componentDidUpdate(){
//         console.log(444, 'componentDidUpdate', this, arguments)

//     }
//     render(){
//         return (
//             <div style={{
//                 position:'fixed',
//                 right: 100,
//                 bottom: 50,
//                 width:40,
//                 height:40,
//                 padding:10,
//                 lineHeight:'40px',
//                 fontSize:16,
//                 backgroundColor: 'green',
//                 color:'red',
//                 textAlign:'center',
//                 display: this.state.show ? '': 'none'
//             }}>goTop</div>
//         )
//     }
// }

// render(<Slider></Slider>, app)


// import ImageZoom from './image-zoom';

// class App extends Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             img:'demo.jpeg'
//         }
//     }
//     render(){
//         return (
//             <div>
//                 <div></div>
//                 <div className="list">
//                     <img src={this.state.img} alt="" width='100'  height='100'/>
//                 </div>
//             </div>
//         )
//     }
// }

// render(<App></App>, app)


// console.log(React)

// class App extends PureComponent {
//     constructor(props){
//         super(props)
//         this.state={
//             isShow: 'none'
//         }
//     }
//     componentDidMount(){
//         window.addEventListener('scroll', () => {
//             if(scrollY > 200){
//                 this.setState({
//                     isShow:''
//                 })
//             } else {
//                 this.setState({
//                     isShow:'none'
//                 })
//             }
//         })
//     }
//     render(){
//         console.log(render)
//         return (
//             <div>
//                 <span style={{
//                     color:'red',
//                     backgroundColor:'green',
//                     position:'fixed',
//                     right:40,
//                     bottom: 40,
//                     width:50,
//                     height:50,
//                     lineHeight:'50px',
//                     display: this.state.isShow                     
//                 }}>goTop</span>
//             </div>
//         )
//     }
// }

// render(<App></App>, app)


// class App extends Component {
//     constructor(props){
//         super(props)
//         this.state= {
//             news: ['第一条新闻','第二条新闻','第三条新闻']
//         }
//     }
//     createList(){
//         return this.state.news.map( item => (
//             // <li key={item}>{item}</li>
//             <Fragment key={item}>
//                 <li>{item}</li>
//                 <hr />
//             </Fragment>
//         ))

//     }
//     render(){
//         return (
//             <div>
//                 <ul>{this.createList()}</ul>
//             </div>
//         )
//     }
// }

// render(<App></App>, app)

// class App extends Component {
//     render(){
//         return (
//             <div>
//                 <h1>app part</h1>
//                 <Errors>
//                     <Demo></Demo>
//                 </Errors>
//                 <Errors>
//                     <h1>ickt</h1>
//                 </Errors>
//             </div>
//         )
//     }
// }

// class Errors extends Component {
//     constructor(props){
//         super(props)
//         this.state={
//             hasError: false
//         }
//     }
//     static getDerivedStateFromError(){
//         return {
//             hasError:true
//         }
//     }
//     componentDidCatch(...args){
//         console.log(args)
//     }
//     render(){
//         if(this.state.hasError){
//             return <h1>has error</h1>
//         }
//         return this.props.children
//     }
// }

// class Demo extends Component{
//     render(){
//         return (
//             <div style='color:red'>hello ickt</div>
//         )
//     }
// }

// render(<App></App>, app)



// class App extends Component {
//     constructor(props){
//         super(props)
//         this.user = createRef();
//     }
//     showData(){
//         // console.log(this.refs.username.value);
//         // console.log(this.refs.password.checked)
//         console.log(this.user.current.value);
//         console.log(this.refs.password.checked)
//     }
//     changeData (){
//         this.user.current.value = 'ickt234';
//         this.refs.password.checked=false
//     }
//     render(){
//         return (
//             <div>
//                 <p>
//                 <label htmlFor="username">username</label>
//                 {/* <input type="text" placeholder='请输入用户名' ref= 'username' defaultValue='hello' /> */}
//                 <input type="text" placeholder='请输入用户名' ref= {this.user} defaultValue='hello' />
//                </p>
//                <p>
//                 <label htmlFor="password">password</label>
//                 <input type="checkbox" defaultChecked ref='password'/>
//                </p>
//                <p>
//                    <button onClick={this.showData.bind(this)}>获取数据</button>
//                    <button onClick= { e => this.changeData(e)}>修改数据</button>
//                </p>
//             </div> 
//         )
//     }
// }

// render(<App></App>, app)


// class App extends Component {
//     constructor (props){
//         super(props)
//         this.state = {
//             username: 'hello',
//             password: true

//         }
//     }

//     showData(){
//         console.log(this.state)

//     }
//     changeData(){
//         this.setState({
//             username:'ickt',
//             password: false
//         })
//     }
//     changeUsername (e){
//         // console.log(e.target.value)
//         let username = e.target.value;
//         if(/^\w{4,12}$/.test(username)){
//             this.setState({username})
//         }
//         // this.setState({
//         //     username
//         // })
//     }

//     // changePassword(e){
//     //     this.setState({password:e.target.checked})


//     // }

//     render(){
//         let {username, password} = this.state;
//         return (
//             <div>
//                <p>
//                    <label htmlFor="">username</label>
//                    <input type="text" placeholder='请输入用户名' value={username} onChange={e => this.changeUsername(e)}/>
//                </p> 
//                <p>
//                    <label htmlFor="" che>password</label>
//                    {/* <input type="checkbox" checked={password} onChange={e => this.changePassword(e)}/> */}
//                    <input type="checkbox" checked={password} onChange={e => this.setState({password:e.target.checked})}/>
//                </p> 
//                <p>
//                <button onClick={this.showData.bind(this)}>获取数据</button>
//                <button onClick={e => this.changeData(e)}>修改数据</button>
//                </p>

//             </div>
//         )
//     }
// }
// render(<App></App>, app)

// class App extends Component {
//     showData(){
//         console.log(this.refs.color.value)

//     }
//     changeData(){
//         this.refs.color.value= 'isblue'

//     }
//     render(){
//         return (
//             <div>
//                 <p>
//                     {/* <select  defaultValue='green'>
//                         <option >red</option>
//                         <option >green</option>
//                         <option >blue</option>  
//                     </select> */}
//                      <select  defaultValue='isgreen' ref='color'>
//                         <option value='isred'>red</option>
//                         <option value='isgreen'>green</option>
//                         <option value='isblue'>blue</option>  
//                     </select>
//                 </p>
//                 <p>
//                     <button onClick={this.showData.bind(this)}>获取数据</button>
//                     <button onClick={e => this.changeData(e)}>修改数据</button>
//                 </p>
//             </div>
//         )
//     }
// }
// render(<App></App>, app)


// class App extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             msg:'hello'
//         }
//     }
//     render(){
//         let {msg} = this.state
//         return (
//             <div>
//                 <input type="text" value={msg} onChange={e => this.setState({msg: e.target.value})} />
//                 <Demo msg={msg}></Demo>
//                 <Demo msg={msg}></Demo>
//                 <IcktDemo msg={msg}></IcktDemo>
//             </div>
//         )
//     }
// }
// class Demo extends Component {
//     // componentWillReceiveProps(props){
//     //     console.log(111, props)
//     // }
//     render(){
//         return (
//             <div>
//                 <h1>{this.props.msg}</h1>
//             </div>
//         )
//     }
// }

// function ickt (Comp){
//     class Ickt extends Component {
//         render(){
//             return <Demo></Demo>
//         }
//     }
//     return Ickt
// }

// let IcktDemo = ickt(Demo)
// render(<App></App>, app)

let ickt = createRef();

class App extends Component {
    render(){
        return (
            <div>
                <h1 ref={ickt}>ickt-1</h1>
                <h1>ickt-2</h1>
                <h1>ickt-3</h1>
                <h1>ickt-4</h1>
                <h1>ickt-5</h1>
            </div>

        )
    }
}

render(<App></App>, app, () => {
    console.log(ickt)

})