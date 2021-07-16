const obstaclesArray = [];

class  Obstacles {
     
    constructor(){
        this.top= (Math.random() * canvas.height/3) + 30;
        this.bottom = (Math.random() * canvas.height/3) + 30;
        this.x = canvas.width; 
        this.width = 20;
        this.color = 'black';

        this.counted = false;
    }

    draw(){
       ctx.fillStyle = this.color;
       //top obstacle
       ctx.fillRect(this.x, 0, this.width, this.top);
       //top obstacle
       ctx.fillRect(this.x, canvas.height-this.bottom, this.width, this.bottom);
    }

    update(){
        this.x -= gamespeed;
        if (!this.counted && this.x < airplane.x)
        {
            score++;
            this.counted = true;
        }
        this.draw();
    }
}

function handleObstacle(){
    if (frame%50 ===0){
        obstaclesArray.unshift(new Obstacles);
    }

    for (let i =0; i < obstaclesArray.length; i++){
        obstaclesArray[i].update();
    }

    if(obstaclesArray.length > 20){
        obstaclesArray.pop(obstaclesArray[0]);
    }
}

