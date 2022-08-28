
const Engine = Matter.Engine;
//namespacing=giving nick names
//const=constant fixed variable
//all kind of physics property
const World = Matter.World;
//the world where we create to use physics property
const Bodies = Matter.Bodies;
//the group of objects which follows rules accordingly
const Body = Matter.Body;
//individual body




function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  //We are creating our engine from matter.Engine
  world = engine.world;
  //whenever we create a engine a world gets created already with it

  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     //we create physics property here
     //it follows JSON Rule
     //Javascript Object Notation
     //whenever you use JSON instead of = we use : and instead of ; we use ,
     isStatic: true,
     //isStatic= if the object is moving or not

   };
  
  
//we are creating our object i.e ground from Bodies
  ground = Bodies.rectangle(100,400,400,20,ground_options);
  World.add(world,ground);
  //we are adding our world's ground to Matter.js World

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  Box1 = Bodies.rectangle(200,200,20,20,ball_options);
  World.add(world,Box1);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
  //to make the objects in Center
}


function draw() 
{
  background(51);
  Engine.update(engine);
  //we are updating our engine from matter.Engine
  
  
 
   //we are displaying our object
   fill("sea green")
  ellipse(ball.position.x,ball.position.y,20);
  fill("blue")
  rect(ground.position.x,ground.position.y,500,20);
  fill("yellow")
  rect(Box1.position.x,Box1.position.y,20,20);
 
console.log(ground.position.y);

  
  
}

