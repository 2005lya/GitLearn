// console.log('index main');
console.log('index main');

require.config({
    map: {
        '*': {
            css : 'lib/css'
        }
    },
    paths : {
        common : 'modules/common',
        index : 'modules/index',
        MVC:'lib/MVC',
        jquery:  'lib/jquery'

    },
    baseUrl : '/'
}),

define([
    'MVC',
    'css!common/common.css',
    'common/header/header',
    'common/bg/bg',
], function(MVC){
    MVC.install();
})