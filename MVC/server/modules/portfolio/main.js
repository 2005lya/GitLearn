
require.config({
    map: {
        '*': {
            css : 'lib/css'
        }
    },
    paths : {
        common : 'modules/common',
        portfolio : 'modules/portfolio',
        MVC:'lib/MVC',
        jquery:  'lib/jquery'

    },
    baseUrl : '/'
}),

define([
    'MVC',
    // '../common/bg/bg',
    // 'modules/common/bg/bg',
    'common/bg/bg',
    'common/header/header'
], function(MVC){
    MVC.install();
})