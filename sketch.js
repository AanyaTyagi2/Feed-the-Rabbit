var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  Apple = loadImage("apple.png");
  Leaf = loadImage("leaf.png");
  Orange= loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=World.mouseX;
  if(frameCount%100===0){
    var x= Math.round(random(1,3));
    switch(x){
      case 1: createApples();
      break;
      case 2: createLeaf();
      break;
      case 3: createOrange();
      break;
    }

  } 
  drawSprites();
}
function createApples(){
  apple1=createSprite(random(50,350),40,10,10);
  apple1.addImage("Apple",Apple);
  apple1.velocityY=3;
  apple1.lifetime=100;
  apple1.scale=0.08
  
}
function createLeaf(){
  apple1=createSprite(random(50,350),40,10,10);
  apple1.addImage("Leaf",Leaf);
  apple1.velocityY=3;
  apple1.lifetime=100;
  apple1.scale=0.08
  
}
function createOrange(){
  apple1=createSprite(random(50,350),40,10,10);
  apple1.addImage("Orange",Orange);
  apple1.velocityY=3;
  apple1.lifetime=100;
  apple1.scale=0.08
}
