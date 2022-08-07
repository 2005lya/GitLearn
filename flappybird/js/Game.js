function Game (ctx, bird , pipe, land, mount){
    this.ctx = ctx;
    this.bird = bird;
    this.pipeArr = [pipe];
    this.land = land;
    this.mount = mount;
    this.timebar = null;
    this.width = ctx.canvas.width;
    this.height = ctx.canvas.height;
    this.frame = 0;
    this.score = 0;


}
Game.prototype.init = function (){
    this.startGame();
    this.bindEvent()
}
Game.prototype.renderMount = function (){
    this.mount.x -= this.mount.speed;
    if(this.mount.x <= -this.width){
        this.mount.x = 0;
    }
    this.ctx.drawImage(this.mount.img, this.mount.x, this.mount.y)
    this.ctx.drawImage(this.mount.img, this.mount.x + this.mount.img.width, this.mount.y)
    this.ctx.drawImage(this.mount.img, this.mount.x + this.mount.img.width * 2, this.mount.y)
}
Game.prototype.startGame = function (){
    var me = this;
    this.timebar = setInterval(function (){
        me.frame ++;
        me.ctx.clearRect(0, 0, me.width, me.height)
        me.renderMount();
        me.renderLand();
        me.renderBird();
        me.renderPipe();
        me.createPipe();
        me.removePipe();
        me.checkLand();
        me.checkPipe();
        
    }, 20)
}
Game.prototype.renderLand = function (){
    var land = this.land;
    land.x -= land.speed;
    if(land.x < -land.img.width){
        land.x = 0;
    }
    this.ctx.drawImage(land.img, land.x, land.y);
    this.ctx.drawImage(land.img, land.x + land.img.width, land.y);
}
Game.prototype.renderBird = function (){
    if(this.frame % 5 === 0){
        this.bird.fly();
    }
    this.bird.flydown();
    this.ctx.save();
    this.ctx.translate(this.bird.x, this.bird.y);
    // this.ctx.rotate(Math.PI / 6);
    this.ctx.rotate(this.bird.angle)
    this.ctx.drawImage(this.bird.img, -this.bird.img.width / 2, -this.bird.img.height / 2);
    this.ctx.restore();
}
Game.prototype.bindEvent = function (){
    var me = this;
    this.ctx.canvas.onclick = function (){
        me.bird.flyup();
    }
}

Game.prototype.renderPipe = function (){
    for(var i =0 ; i< this.pipeArr.length; i++){
        var pipe = this.pipeArr[i];
        pipe.x -=  pipe.speed;
    var upImg = pipe.upImg;
    var upImgX = 0;
    var upImgY = upImg.height - pipe.upheight;
    var upImgWidth = upImg.width;
    var upImgHeight = pipe.upheight;
    var upX = pipe.x;
    var upY = 0;
    var upWidth = upImgWidth;
    var upHeight = upImgHeight;
    this.ctx.drawImage(upImg, upImgX, upImgY, upImgWidth, upImgHeight, upX, upY, upWidth, upHeight);

    var downImg = pipe.downImg;
    var downImgX = 0;
    var downImgY = 0;
    var downImgWidth = downImg.width;
    var downImgheight =  pipe.downheight;
    var downX = pipe.x;
    var downY = pipe.height - downImgheight;
    var downWidth = downImgWidth;
    var downheight = downImgheight;

    this.ctx.drawImage(downImg, downImgX, downImgY, downImgWidth, downImgheight, downX, downY, downWidth, downheight);
    }
}
Game.prototype.createPipe = function (){
    if(this.frame % 70 === 0){
        var pipe = this.pipeArr[0].createPipe();
         this.pipeArr.push(pipe);
    }
}
Game.prototype.removePipe = function(){
    var pipe = this.pipeArr[0];
    if(pipe.x < -pipe.upImg.width){
        this.pipeArr.shift();
        this.score ++;
    }
}
Game.prototype.checkLand = function (){
    if(this.land.y - this.bird.y < this.bird.img.height / 2){
        this.gameover();
    }
}

Game.prototype.checkPipe = function (){
    for(var i = 0; i < this.pipeArr.length; i++){
        var pipe = this.pipeArr[i];
        var halfPipe = pipe.upImg.width / 2;
        var centerLineX = pipe.x + halfPipe;
        var upHeight = pipe.upheight;
        var downHeight = pipe.height - pipe.downHeight;
        var x = this.bird.x;
        var y = this.bird.y;
        var halfWidth = this.bird.img.width / 2;
        var halfHeight = this.bird.img.height / 2;
        if(y < upHeight + halfHeight - 5 && Math.abs(x - centerLineX) < halfWidth + halfPipe -5){
            this.gameover();
        }
    }

}
Game.prototype.gameover = function (){
    clearInterval(this.timebar);
    console.log(this.score);
}