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