module.exports = {
    mode:"development",
    resolve : {
        alias:{
            'vue$': 'vue/dist/vue.js'
        }
    },
    entry:'./modules/mr.js',
    output: {
        filename:'./mr.js'
    },
    module:{
        rules:[
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