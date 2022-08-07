let React = require('react');
const { render } = require('react-dom');
let reactDOMSever = require('react-dom/server')

class App extends React.Component {
    constructor (props){
        super(props);
        this.state= {
            num: 100
        }
    }
    addNum (){
        this.setState({num: this.state.num+1})
    }
    render (){
       return React.createElement(
           'div',
           null,
           React.createElement('h1','hello ickt'),
           React.createElement('button', {onClick : e =>  this.addNum(e)}, 'num:' + this.state.num)
       )
    }
}
reactDOMSever.renderToString(React.createElement('App'), )