
var ball1,ball2,ball3,ball4,edges;

function preload(){}

function setup(){
  createCanvas(1000,500);
  ball1 = createSprite(120,300,20,20);
  ball1.setVelocity(10,10);
  ball2 = createSprite(300,300,20,20);
  ball2.setVelocity(10,-10);
  ball3 = createSprite(120,120,20,20);
  ball3.setVelocity(-10,-10);
  ball4 = createSprite(300,120,20,20);
  ball4.setVelocity(-10,10);
  edges = createEdgeSprites();
}


function draw(){
  background(220);
  ball1.bounceOff(edges);
  ball2.bounceOff(edges);
  ball3.bounceOff(edges);
  ball4.bounceOff(edges);
  ball1.bounce(ball2);
  ball1.bounce(ball3);
  ball1.bounce(ball4);
  ball2.bounce(ball3);
  ball2.bounce(ball4);
  ball3.bounce(ball4);
  drawSprites();
}
