const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var div1,div2,div3,div4,div5,div6
var plinkos =[];
var particles =[];
var divisions =[];
var divisionHeight = 300

function setup() {
  createCanvas(600,600);

  engine = Engine.create();
	world = engine.world;

  div1 = new Division(300,480,10,220)
  div2 = new Division(100,480,10,220)
  div3 = new Division(200,480,10,220)
  div4 = new Division(400,480,10,220)
  div5 = new Division(500,480,10,220)
  div6 = new Division(300,590,600,10)

  for(i=40 ; i<=width ; i=i+50){
    plinkos.push(new Plinko(i,75));
  }
  for(i=15 ; i<=width-10 ; i=i+50){
    plinkos.push(new Plinko(i,175));
  }
  for(i=20 ; i<=width ; i=i+50){
    plinkos.push(new Plinko(i,275));
  }
  
  
	Engine.run(engine);
}

function draw() {
  background(0);  

  div1.display();
  div2.display();
  div3.display();
  div4.display();
  div5.display();
  div6.display();

  for(var i = 0;i< plinkos.length ; i++){
    plinkos[i].display();
  }
  
  for(var j = 0; j< particles.length ; j++){
    particles[j].display();
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),15,15));
    
  }
  // console.log(frameCount)
  drawSprites();
}