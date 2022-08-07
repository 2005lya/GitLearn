var demo = require('./demo');
var {appendFile, appendFileSync} = require('fs');

// var { add } = demo;
// console.log(demo);
// console.log(add(5, 6));
// console.log(demo(5, 6));

try {
    var result = appendFileSync('^demo.txt', 'hello')

} catch (e) {
    console.log(222, e) 
}
console.log(111, result);

appendFile('style.css',`
h1 {
    color : 'red',

}
`, function (err){
    console.log(err)

})
