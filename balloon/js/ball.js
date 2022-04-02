let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let ball = document.getElementById('ball');
var text = document.getElementsByTagName('strong');

var width = 150;
var height = 180;
var max = Math.round( Math.random() * 50 );
var index = 0;
var exploed_num = 0;
var total_pump = 0;
var current_earned = 0;
var ballon_num = 10;
var total_earned = 0;

var inflation = function (){
    width = width * 1.004;
    height = height * 1.004;
    // if(width < 250) {
    ball.style.width = width +'px';
    ball.style.height = height+ 'px';
    // } else {
    //     ball.style.display = 'none'
    // }
}
btn1.onclick = function (){  
    index++;
    total_pump++;
    if(index < max){
        inflation();
        current_earned = Math.floor((index * 0.1)*10e6)/10e6;
        ball.style.display = 'block'; 
        btn1.innerHTML = 'INFLATE';


    } else {
        ball.style.display = 'none'; 
        index = 0;
        exploed_num++;
        current_earned = 0;
        ballon_num --;
        btn1.innerHTML = 'NEXT';
    }
    text[2].innerHTML= index;
    text[3].innerHTML= exploed_num;
    text[1].innerHTML = current_earned;
    text[0].innerHTML = ballon_num;
    text[4].innerHTML = total_pump;
}
btn2.onclick = function (){
    total_earned += current_earned;
    text[5].innerHTML = total_earned;
    ballon_num --;
    text[0].innerHTML = ballon_num;
    current_earned = 0;
    text[1].innerHTML = current_earned;
    index = 0;
    text[2].innerHTML= index;
}
if(ballon_num < 0){
    btn1.disabled = true;
}
