module.exports = {
    mode:"development",
    resolve : {
        // alias:{
        //     'vue$': 'vue/dist/vue.js'
            
        // }
        extensions:['.jsx','.js']
    },
    entry:'./modules/main.jsx',
    output: {
        filename:'./demo.js'
    },
    module:{
        rules:[
            {
                test:/\.jsx$/,
                loader:'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
                
            },
            {
                test:/\.css$/,
                use: [
                    {
                        loader:'style-loader'

                    },
                    {
                        loader:'css-loader'

                    }
                ]
            },
            {
                test:/\.less$/,
                use:[
                    {
                        loader:'style-loader'
                    },
                    {
                        loader:'css-loader'
                    },
                    {
                        loader:'less-loader'
                    }
                ]
            }, {
                test:/\.scss/,
                use:[
                    {
                        loader:'style-loader'
                    },
                    {
                        loader:'css-loader'
                    },
                    {
                        loader:'sass-loader'
                    }
                ]
            }
        ]
    }
}