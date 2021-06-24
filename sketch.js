var countDistanceX=0,platform1
var gap=60
function preload()
{}

function setup() {
  createCanvas(9000, 668);
  for (i=0 ; i<24 ; i++){
  platform1=new Platform(countDistanceX);
  countDistanceX=countDistanceX+platform1.rw+gap
  gap=random([80,100,220,50,0])
  }
}

function draw() {
  background('skyblue'); 
 drawSprites();
}

