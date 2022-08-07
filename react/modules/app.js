let React = require('react')
let express = require('express')
let ejs = require('ejs')
let {renderToString, renderToStaticMarkup} = require ('react-dom/server')

const { render } = require('react-dom')

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            num: 100
        }
    }
    addNum(){
        this.setState({
            num: this.setState.num + 1
        })
    }
    render(){
        return React.createElement(
            'div',
            null,
            React.createElement('h1',null, 'hello ickt'),
            React.createElement('button', {
                onClick: e => this.addNum(e)
            },'num:' + this.state.num
            )
            )
        // return (
        //     <div>
        //         <h1>hello ickt</h1>
        //         <button onClick={e => this.addNum(e)}>{'num' + this.state.num}</button>
        //     </div>
        // )
    }
}


// renderToString(<App></App>)
// renderToString(React.createElement(App))
// console.log(renderToString(React.createElement(App)))
console.log(renderToStaticMarkup(React.createElement(App)))


let app = express();
app.engine('.html', ejs.__express);
app.get('/', (req, res) => {
    res.render('index.html', 
    {title: 'ickt',
    seo: `
    <meta name= "keywords" content='ickt'/>
    <meta name= "description" content='爱创课堂是一件专业前端学校'/>
    `,
    content: renderToString(React.createElement(App))

    }
    )
})

app.listen(3000)
