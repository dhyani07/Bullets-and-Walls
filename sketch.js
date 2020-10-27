var thickness, wall;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);
  thickness = random (22,83);
  speed = random (223,321);
  weight = random(30,52);

  bullet = createSprite(50,200,100,10);

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

}

function draw() 
{
  background(0,0,0);  
  
  bullet.velocityX = speed;
 
  if (wall.x - bullet.x < (wall.width + bullet.width)/2){

    bullet.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/(thickness*thickness*thickness);
    
    if (deformation < 10){
      bullet.shapeColor = color(0,255,0);
    }

    if (deformation > 10){
      bullet.shapeColor = color (255,0,0);
    }
  }



  drawSprites();
}

function hasCollided (bullet1,wall1)
{
  bulletRightEdge = bullet1.x + bullet1.width;
  wallLeftEdge = wall1.x;

  if (bulletRightEdge >= wallLeftEdge)
  {
    return true;
  }
  return false;
}
