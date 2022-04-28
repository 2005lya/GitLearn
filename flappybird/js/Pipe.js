function Pipe(upImg, downImg, speed, x, height){
    this.upImg = upImg;
    this.downImg = downImg;
    this.speed = speed;
    this.x = x;
    this.height = height;
    this.upheight = 10 + Math.random() * (height - 150 - 20);
    this.downheight = height - 150 - this.upheight;
    this.width = x;
}

Pipe.prototype.createPipe = function (){
    return new Pipe(this.upImg, this.downImg, this.speed, this.width, this.height);
}