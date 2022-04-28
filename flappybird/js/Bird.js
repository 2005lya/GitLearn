function Bird (imgArr, x, y){
    this.imgArr = imgArr;
    this.x = x;
    this.y = y;
    this.index = 0;
    this.img = this.imgArr[this.index];
    this.speed = 1;
    this.direction = 'DOWN';
    this.angle = 0;
}
Bird.prototype.fly = function(){
    this.index ++;
    if(this.index >= this.imgArr.length){
        this.index = 0;
    }
    this.img = this.imgArr[this.index]
}
Bird.prototype.flydown = function (){
    var deg = Math.PI / 180 * this.speed;
    if(this.direction === 'DOWN'){
        this.angle = deg;
    this.speed ++;
    this.y += Math.sqrt(this.speed);
    } else {
        this.angle = -deg;
        this.speed --;
        if(this.speed <= 0){ 
            this.direction = 'DOWN';
            return;
        }
        this.y -= Math.sqrt(this.speed);
    }
}
Bird.prototype.flyup = function (){
    this.direction = 'UP';
    this.speed = 25;
}

