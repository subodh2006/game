var PLAY = 1;
var END = 0;
var gameState = PLAY;
var form;
var santa, santaimg, santa_collided,santa_running ;
var snow,snowbackimg; 
var ground;
var score = 0;
var obstacleGroup,obstacleimg;
var obstacles;
var obstacle1_img;
var obstacle2_img;
var player;

function preload(){
  obstacle1_img = loadImage("logs.png");
  obstacle2_img = loadImage("igloo.png");
snowbackimg = loadImage("snow1.png")
santa_running = loadAnimation("santa1.png","santa1.5.png","santa2.png","santa2.5.png","santa2.6.png","santa2.7.png","santa3.png","santa4.png","santa5.png","santa6.png","santa7.png");


//obstacle2 = loadImage("obstacle2.png");

}


function setup() {
  createCanvas(1000,600);
  snow = createSprite(500,250);
  snow.addImage(snowbackimg);
  snow.velocityX = -8;
 snow.X = snow.width/2;
 snow.scale = 1.4

 form = new Form()
      

ground = createSprite(500,660,1000,20);
ground.shapeColor="white";

//ground.velocityX = -(6 + 3*score/100);

  santa = createSprite(95,450,20,50);
  santa.addAnimation("running", santa_running); 
  santa.scale = 0.6; 

 


}

function draw() {
  background(0);  

  if(keyDown("space") && santa.y >=470) {
    santa.velocityY = -14;


    if((touches.length > 0 || keyDown("SPACE")) && santa.y  >= height-120) {
    santa.velocityY = -10;
       touches = [];
    }

    if(obstacleGroup.isTouching(santa)){
      gameState = END;
  }
    
if (gameState =END ){
  ground.velocityY = 0;
}

  }








    



  santa.velocityY = santa.velocityY +0.5;
  
  if (snow.x < 100){
    snow.x =snow.width/2;
  }
  santa.collide(ground);


  form.display();

swapnobstacles();
  drawSprites();
}

function swapnobstacles(){
  if(frameCount % 100 ===0){
    obstacles = createSprite(random(1000,100),540,100,100);
    obstacles.velocityX = -15;
   var rand = Math.round(random(1,2));

    switch (rand){
        case 1 : obstacles.addImage(obstacle1_img);
        break;
      case 2 : obstacles.addImage(obstacle2_img);
       break;
    /////    case 3 : fruits.addImage(fruit3_img);
//break;
    //    case 4 : fruits.addImage(fruit4_img);
   //     break;
     //   case 5 : fruits.addImage(fruit5_img);
//break;
obstacles.scale = 0.4;
        obstacleGroup.add(obstacles);
    }
  }
}