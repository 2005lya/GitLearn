module.exports = {
    mode:"development",
    resolve : {
        // alias:{
        //     'vue$': 'vue/dist/vue.js'
            
        // }
        extensions:['.jsx','.js']
    },
    entry: '/src/skin.jsx',
    output: {
        filename:'skin.js'
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
                loader:'style-loader!css-loader!less-loader'
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