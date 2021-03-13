var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1 = createSprite(150, 250, 50, 80);
  rect1.shapeColor = "green";
  rect2 = createSprite(100, 700, 50, 80);
  rect2.shapeColor = "green";
  rect2.velocityX = 2
  rect3 = createSprite(350, 150, 50, 80);
  rect3.shapeColor = "green";
  rect4 = createSprite(600, 700, 50, 80);
  rect4.shapeColor = "green";
  rect4.velocityX = -2
}

function draw() {
  background(0,0,0);  



  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(rect3,movingRect)){
    movingRect.shapeColor = "cyan";
  rect3.shapeColor = "cyan";
  }else{
    movingRect.shapeColor = "lime";
    rect3.shapeColor = "lime";
  }
 
  bounceOff(rect2,rect4);

  drawSprites();
}
