var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 80);
  fixedRect.shapeColor= "red";

  movingRect= createSprite(200,200,80,30);
  movingRect.shapeColor= "green";

  movingRect.debug= true;
  fixedRect.debug= true;
}

function draw() {
  background(255);
  
  console.log(movingRect.x-fixedRect.x);
  movingRect.x= mouseX;
  movingRect.y= mouseY;
 
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 &&
    ){
    movingRect.shapeColor= "orange";
  }
  else{
    movingRect.shapeColor= "green";
  }

  drawSprites();
}