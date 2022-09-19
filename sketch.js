//all variables

var car,carImg,pathImg,path
var car1,car1Img,car2,car2Img
var score=0
var gameOver,gameOverImg
var background,backgroundImg
var piller1,piller2


//game states

var END =0;
var PLAY =1;
var gameState = PLAY;


//loading sound and Images

function preload(){
  
  pathImg = loadImage("path.png")
  carImg = loadImage("car.png")
  car1Img= loadImage("obstacle.png")
  car2Img= loadImage("obstacle2.png")
  gameOverImg = loadImage("gameOver.png")
  backgroundImg = loadImage("background.png")

  
} 

//making all spries

function setup(){
  

  createCanvas(1500,730);



background = createSprite(800,500,500,500)
background.addImage("background",backgroundImg)
//background.scale = 0.5



path = createSprite(780,500,500,600);
path.addImage("path",pathImg);
path.scale = 0.5
path.velocityY = 3
 

piller1 = createSprite(370,650,10,1500)


piller2 = createSprite(1190,650,10,1500)




car = createSprite(500,680,40,20);
car.addImage("car",carImg);
car.scale=0.3;


car1G=new Group();
car2G=new Group();



gameOver = createSprite(780,300,50,50)
gameOver.addImage("gameOver",gameOverImg);
gameOver.scale = 1
gameOver.visible = false



score=0






}

function draw() {

 if(gameState === PLAY){

drawSprites(); 
textSize(20);
fill(255);
text("score: "+  score,10,30)


  
  
  edges= createEdgeSprites();
  car.collide(piller1);

  edges= createEdgeSprites();
  car.collide(piller2);
  
  //code to reset the background
  if(path.y > 600 ){
    path.y = height/2;
  }

  score = score + Math.round(getFrameRate()/60);
  path.velocityY = +(6 + 3*score/100);


  createcar1();
  createcar2();
  

 
  if(keyDown("left")){
    car.x = car.x - 6;
  
   }
    if(keyDown("right")){
      car.x = car.x  + 6;
    }
  

  if(car.isTouching(car1G)){
    
   gameState = END
    
  }
  


  if(car.isTouching(car2G)){

    
    
    gameState = END
  }
  
  
 
}


 else  if(gameState === END){


  gameOver.Visible = true



  car.velocityY = 0
  car1.velocityY = 0
  path.velocityY = 0
  car2.velocityY = 0

  

 

  
  

}



   
    


  }




  function createcar1() {
    if (World.frameCount % 200 == 0) {
     var car1 = createSprite(Math.round(random(400,1000 ),40, 10, 10));
    car1.addImage(car1Img)
    car1.scale=0.07;
    car1.velocityY = path.velocityY;
    car1.lifetime = 200;
    car1G.add(car1)
   
    
    }  
  }

    function createcar2() {
      if (World.frameCount % 150 == 0) {
       var car2 = createSprite(Math.round(random(450, 1000),40, 10, 10));
      car2.addImage(car2Img)
      car2.scale=0.3;
      car2.velocityY = path.velocityY;
      car2.lifetime = 200;
      car2G.add(car2)
     
      
      }  

  }

  