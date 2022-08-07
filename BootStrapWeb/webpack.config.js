// module.exports = {
//     mode:"development",
//     resolve : {
//         // alias:{
//         //     'vue$': 'vue/dist/vue.js'
            
//         // }
//         extensions:['.jsx','.js']
//     },
//     entry:'./modules/demo.jsx',
//     output: {
//         filename:'./demo.js'
//     },
//     module:{
//         rules:[
//             {
//                 test:/\.jsx$/,
//                 loader:'babel-loader',
//                 options: {
//                     presets: ['@babel/preset-env', '@babel/preset-react']
//                 }
                
//             },
//             {
//                 test:/\.css$/,
//                 use: [
//                     {
//                         loader:'style-loader'

//                     },
//                     {
//                         loader:'css-loader'

//                     }
//                 ]
//             },
//             {
//                 test:/\.less$/,
//                 use:[
//                     {
//                         loader:'style-loader'
//                     },
//                     {
//                         loader:'css-loader'
//                     },
//                     {
//                         loader:'less-loader'
//                     }
//                 ]
//             }, {
//                 test:/\.scss/,
//                 use:[
//                     {
//                         loader:'style-loader'
//                     },
//                     {
//                         loader:'css-loader'
//                     },
//                     {
//                         loader:'sass-loader'
//                     }
//                 ]
//             }
//         ]
//     }
// }


let path = require('path');
let root = process.cwd();
module.exports = {
    mode:'development',
    entry: './src/main.jsx',
    output:{
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@' :path.join(root, './src'),
            '@c': path.join(root, './src/components'),
            '@p': path.join(root, './src/pages'),
        }
    },
    module:{
        rules:[
            {
                test:/\.jsx$/,
                loader:'babel-loader',
                options :{
                    presets:['@babel/preset-env', '@babel/preset-react']
                }
            },
            {
                test:/\.css$/,
                loader:'style-loader!css-loader',
            },{
                test:/\.less$/,
                loader:'style-loader!css-loader!less-loader'
            }
        ]
    }

}