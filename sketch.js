var car,wall
var speed,weight


function setup() {
  createCanvas(1600,400);
  speed=random(55,90)
  weight=random(400,1500)
  car=createSprite(50,200,50,50);
  car.shapeColor="white"
  car.velocityX=3;
  wall=createSprite(700,200,60,height/2);

}
function draw() {
  background(0,0,0);  
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5 * speed* speed/22509;
    if(deformation>180)
    {
      car.shapeColor="red";
    }
  
  if(deformation<180 && deformation>100)
  {
    car.shapeColor="orange";
  }
  if(deformation<100)
  {
    car.shapeColor="green";
  }
}
  drawSprites();
}