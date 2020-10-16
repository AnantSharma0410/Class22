const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var myengine, myworld, ground,ball;
function setup() {
  createCanvas(400,400);
  myengine=Engine.create();
  myworld=myengine.world;
  var grounoption={isStatic:true}
  ground=Bodies.rectangle(200,390,400,20,grounoption);
  World.add(myworld, ground);
  var balloption={restitution:1}
  ball=Bodies.circle(200,100,20,balloption);
  World.add(myworld, ball);
}

function draw() {
  background(0); 
  Engine.update(myengine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}