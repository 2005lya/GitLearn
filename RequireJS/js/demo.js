// console.log('demo')

//define a module
// define(100,function (){
//     console.log('222')
// } )
// define({
//     color: 'red',
//     num : 200
// })

// define(function (require, exports, module){
//     // console.log(this, arguments)
//     // exports.color = 'red'
//     // this.num = 100
//     var text = require('./text')
//     console.log(text)


// })

// define ('ickt', function(require, exports, module){
//     console.log(111)
//     console.log(this, arguments)
// })

// define(['./text'], function(){
//     console.log(this, arguments)

// })

// define([
//     './text', 'require'
// ], function(text, require) {
//     // console.log(text)
//     var ickt = require(['ickt'], function (ickt){
//         console.log(ickt)
//     })
//     // console.log(ickt)
 
// });

// require(['./text'])

// define(['./text'], function(text, require){
//     console.log(text)

// })

define ([
    // 'modules/header/header'
    'h'
], function(header){
    console.log(header)

})

