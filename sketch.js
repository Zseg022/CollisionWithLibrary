var fixedRect, movingRect;
var object1, object2, object3, object4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  object1 = createSprite(300,200,50,50);
  object1.shapeColor = "green";

  object2 = createSprite(400, 300,50,50);
  object2.shapeColor = "green";

  object3 = createSprite(750, 450,50,50);
  object3.shapeColor = "green";

  object4 = createSprite(1000,700, 50, 50);
  object4.shapeColor = "green";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(object2,movingRect)){
    movingRect.shapeColor = "blue";
    object2.shapeColor = "blue";
  }
  else{
    movingRect.shapeColor = "green";
    object2.shapeColor = "green";
  }
 
  drawSprites();
}
