var mar
var navio1, navio2;

function preload(){
navio1=loadImage("ship-1.png");
navio2=loadImage("ship-2.png");

mar=loadImage("sea.png");
}

function draw(){
  drawSprites();
  mar=createSprite(150,200);
  navio1=createSprite(210,270);
  navio2=createSprite(210,270);
  navio1.addImmage(navio1);
  navio2.addImage(navio2);
  mar.addImage(mar);
  navio1.scale=0.3;
  navio2.scale=0.3;
  navio2.changeAnimation("navio1", navio1);
}

var mar,navio;
var marImg,navioImg1;

function preload(){
  marImg = loadImage("sea.png");
  navioImg1 = loadAnimation("ship-1.png","ship-1.png",
                            "ship-2.png","ship-1.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");

  // mover o plano de fundo
   mar=createSprite(400,200);
   mar.addImage(marImg);
   mar.velocityX = -5;
   mar.scale=0.3;

  
  navio = createSprite(130,200,30,30);
  navio.addAnimation("movingShip",navioImg1);
  navio.scale =0.25;
  
}

function draw() {
  background(0);
  mar.velocityX = -3;

  
    
  drawSprites();
}
