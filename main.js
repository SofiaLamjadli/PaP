 const canvas = document.getElementById('canvas');
 const ctx = canvas.getContext('2d');
 canvas.width = 600; 
 canvas.height = 400;

 //global variable, value changes often while it runs

 //jump if space default== false
 let jump = false;

 //angle
 let angle = 0;

 //particles change
 let hue = 0;

 // Level count -> default start == 0 
 let frame = 0;

 // score of passing an obstacle -> default score = 0  
 let score = 0;   

 // speed of the whole game (obstacles/ plane etc.)
 let gamespeed = 2;
   
const gradient = ctx.createLinearGradient(0,0,0,70);
gradient.addColorStop('0.4', '#fff');
gradient.addColorStop('0.5', '#000');
gradient.addColorStop('0.55', '#4040ff');
gradient.addColorStop('0.6', '#000');
gradient.addColorStop('0.9', '#fff');

 
const background = new Image();
background.src = 'original_Background.png';
const bg = {
    x1: 0,
    x2: canvas.width,
    y: 0,
    width: canvas.width,
    height: canvas.height
}

function handleBackground(){
    if(bg.x1 <= bg.width + gamespeed) bg.x1 = bg.width;
    else bg.x1 -= gamespeed;

    //if(bg.x2 <= bg.width + gamespeed) bg.x2 = bg.width;
    //else bg.x2 -= gamespeed;
    ctx.drawImage(background, bg.x1, bg.y, bg.width, bg.height);
    //ctx.drawImage(background, bg.x2, bg.y, bg.width, bg.height);

}


 function animate(){
     //clear the entire canvas between every frame of animation
     ctx.clearRect(0, 0, canvas.width, canvas.height);
     handleBackground();
     handleObstacle();
     handleParticles();
     
     airplane.update();
     airplane.draw();


     ctx.fillStyle = gradient;
     ctx.font = '90px Georgia';
     ctx.strokeText(score, 450, 70);
     ctx.fillText(score, 450, 70);
     
     handleCollisions();
     if (handleCollisions()) return; 
     requestAnimationFrame(animate);
     angle+= 0.1;
     hue++;
     frame++;
    }
   animate(); 

  // if keypad down
 window.addEventListener('keydown', function(e){
     // === -> if operators are equal return is true 
     if (e.code === 'Space' || e.code === 'Enter' || e.code === 'ArrowUp') jump = true;
     
 });

 // if keypad up
 window.addEventListener('keyup', function(e){
    // === -> if operators are equal return is true
    if (e.code === 'Space' ||e.code === 'Enter' || e.code === 'ArrowUp') jump = false;
    
});

const bang = new Image();
bang.src = 'bang.png';
function handleCollisions()  {
    for( let i=0; i< obstaclesArray.length; i++){
        if(airplane.x < obstaclesArray[i].x + obstaclesArray[i].width 
           && 
           airplane.x + airplane.width > obstaclesArray[i].x 
           &&

           ((airplane.y < 0 + obstaclesArray[i].top && airplane.y + airplane.height >0) 
           ||
           (airplane.y > canvas.height - obstaclesArray[i].bottom 
           &&
           airplane.y + airplane.height < canvas.height))
        )
        {
                ctx.drawImage(bang, airplane.x, airplane.y, 50, 50);
                ctx.font = "25px Georgia";
                ctx.fillStyle = 'red';
                ctx.fillText('Game Over... now everyone is dead ',  120, canvas.height/2 -15);
                ctx.fillText('Score:'+ score, 280, canvas.height/2 +15);

                return true;
            }
    }
}


