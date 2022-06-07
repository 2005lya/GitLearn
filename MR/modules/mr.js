import Vue from 'vue';
import './style.scss';

new Vue({
    el:"#app",
    data: {
        //the total quantities of my cart
        num : 0,
        price:"$75.00",
        isShow: false,
        bd:[],
        sizes:[],
        li:[],
        quantity:[0, 0, 0]
    },
    methods: {
        show(){
            this.isShow= true;
        },
        hide(){
            this.isShow= false;
        },
        toggle(size){
            switch(size){
                case 'S':
                    this.bd = ['2px solid #222222'];
                    this.sizes=['S']

                    break;
                case 'M':
                    this.bd = [,'2px solid #222222'];
                    this.sizes = [,'M']
                    break;
                case 'L':
                    this.bd = [, , '2px solid #222222'];
                    this.sizes = [, , 'L']
                    break;
                default:
                    break;
            }

        },
        add(){
            if(this.sizes[0]==='S'){
                this.quantity[0]++;
                this.num++;
            } else if(
                this.sizes[1]==='M'
            ){
                this.quantity[1]++;
                this.num++;
            } else if(
                this.sizes[2]==='L'
            ){
                this.quantity[2]++;
                this.num++
            }
            if(this.quantity[0]>0){
                this.li[0]='addshow';     
            };
            if(this.quantity[1]>0){
                this.li[1]='addshow';     
            };
            if(this.quantity[2]>0){
                this.li[2]='addshow';     
            }

        }
    }
})