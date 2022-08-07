import React,{ Component } from 'react';
import './home.less'

export default class Home extends Component {
    get firstList (){
        return [
            {
                img:'sass-less.png',
                h3:'Preprocessors',
                p:'Bootstrap ships with vanilla CSS, but its source code utilizes the two most popular CSS preprocessors, <a>Less</a> and  <a>Sass</a> . Quickly get started with precompiled CSS or build on the source.'
            }, {
                img:'devices.png',
                h3:'One framework, every device.',
                p:'Bootstrap easily and efficiently scales your websites and applications with a single code base, from phones to tablets to desktops with CSS media queries.'
            },{
                img:'components.png',
                h3:'Full of features',
                p:'With Bootstrap, you get extensive and beautiful documentation for common HTML elements, dozens of custom HTML and CSS components, and awesome jQuery plugins.'
            }
        ]
    }

    get thirdList () {
        return [
            {
                img:'expo-lyft.jpeg'

            },{
                img:'expo-vogue.jpeg'
            },{
                img:'expo-newsweek.jpeg'
            }
        ]

    }
    createList(){
        return this.firstList.map((item, index) => (
            <li key={index}>
                <img src={'img/' + item.img} alt="" />
                <h3>{ item.h3}</h3>
                <p dangerouslySetInnerHTML={{__html: item.p}}></p>
            </li>
        ))
    }

    createThirdList (){
        return this.thirdList.map( (item, index) => (
            <li key={index}>
                <img src={'img/' + item.img } alt="" />
            </li>
        ))
    }
    render (){
        // console.log(this.props)
        let { show } = this.props 
        return (
            <div className='page-home'>
                <div className="banner">
                    <div className="logo">B</div>
                    <h1 className="title">Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.</h1>
                    <div className="btn">Download Bootstrap</div>
                    <p className="status">Currently v3.4.1</p>
                </div>

                <div className="first-list">
                    <div className="container">
                        <h2>Designed for everyone, everywhere</h2>
                        <p className='intro'>Bootstrap makes front-end web development faster and easier. It's made for folks of all skill levels, devices of all shapes, and projects of all sizes.</p>
                        <div className="line"></div>
                        <ul>{this.createList()}</ul>
                        <div className="line"></div>
                        <p className="intro">Bootstrap is open source. It's hosted, developed, and maintained on GitHub.</p>
                        <div className="btn">View the Github Project</div>                   
                    </div>
                </div>
                <div className="second-list">
                    <div className="container">
                        <h2>Official Bootstrap Themes</h2>
                        <p className='intro'>Take Bootstrap to the next level with official premium themes. Each theme is its own toolkit featuring all of Bootstrap, brand new components and plugins, full docs, build tools, and more.</p>
                        <div className="btn">Browse Themes</div>
                        <div className="img">
                            <img src="./img/bs-themes.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="third-list">
                    <div className="container">
                        <h2>Built with Bootstrap</h2>
                        <p className="intro">Millions of amazing sites across the web are being built with Bootstrap. Get started on your own with our growing collection of examples or by exploring some of our favorites.</p>
                        <div className="line"></div>
                        <ul>{this.createThirdList ()}</ul>
                        <p className="intro">We showcase dozens of inspiring projects built with Bootstrap on the Bootstrap Expo.</p>
                        <div className="btn">Explore the Expo</div>
                    </div>
                </div>
            </div>


        )
    }
}