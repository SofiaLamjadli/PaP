class Airplane{
    constructor(){
        //position
        this.x = 150;
        this.y = 200;
        //vertical speed
        this.vv = 0;
        
        //
        this.width = 20;
        this.height = 20;
        this.weight = 1;
    }


    // calculate position and speed 
    update(){
        // circles between -1 and +1
        let curve = Math.sin(angle);
       if(this.y > canvas.height - (this.height*3) + curve)
        {
          this.y = canvas.height - (this.height*3) + curve;
          this.vv=0;
        }
        else
        {
            this.vv += this.weight;
            this.vv *= 0.9;
            this.y += this.vv;
        }
       if (this.y < 0 + this.height)
        {
           this.y = 0 + this.height;
           this.vv = 0;
        }
        if (jump) this.flap();

        
    }

    // represents player in red rectangle
    draw(){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height);
        
    }

    flap(){
        this.vv -=2.5;
    }
  


}

//object of class Airplane will be declared
const airplane = new Airplane();