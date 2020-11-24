var fixedRect, movingRect;
var car,wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car=createSprite(300,200,60,60)
  car.shapeColor = "blue";
  car.velocityX=5;
  wall=createSprite(600,200,60,60)
  wall.shapeColor = "white";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  bounceOff(car,wall);
  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - fixedRect.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object2.height/2) {
      return true;
}
else {
  return false;
}
}
function bounceOff(object1,object2){
  if(object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2){
      object1.velocityX = object1.velocityX * (-1);
  }
  if(object1.y - fixedRect.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object2.height/2){
      object1.velocityY = object1.velocityY * (-1);
    }
  }
