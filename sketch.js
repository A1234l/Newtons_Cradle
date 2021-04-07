var bob1, bob2, bob3, bob4, bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
var bobD;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	bobDiameter = 100;
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new ground(400,100,310,25);
	bob1 = new Bob(300,300);
	bob2 = new Bob(350,300);
	bob3 = new Bob(400,300);
	bob4 = new Bob(450,300);
	bob5 = new Bob(500,300);
	rope1 = new Rope(bob1.body,roof.body,{x: 100,y: 0});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(255);
  
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();

  drawSprites();
 
}



