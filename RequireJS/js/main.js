// require(['./demo', 'require'], function(demo, require){
//     // console.log(arguments)
//     console.log(demo, require)
//     // require(['ickt'])
// })
require.config({
    paths: {
        'h': 'modules/header/header'
    }
})

require(['./demo'])

