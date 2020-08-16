var bullet,wall;
var speed,weight;





function setup() {

  createCanvas(1600,400);

   bullet = createSprite(50,200,50,50);
   

  speed = random(223,321);

  thickness = random(22,83)

  weight = random(30,52);

  wall = createSprite(700,200,thickness,height/2)
  wall.shapeColor = color(80,80,80);
}

function draw() {

  background(255,255,255);  

  bullet.velocityX = speed;

  hasColloded();

  if(hasColloded(bullet,wall))
  {
  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
  
 if(damage>10)
 {
  wall.shapeColor = color(255,0,0);
 }

 if(damage<10)
 {
  wall.shapeColor = color(0,255,0);
 }

  }

  

  drawSprites();
}
function hasColloded(lbullet,lwall){

  bulletRightEdge=lbullet.x+lbullet.width;
  wallleftedge=lwall.x;
  if(bulletRightEdge>=wallleftedge){
    return true;
  }
  return false;
}
