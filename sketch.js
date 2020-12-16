
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

    Paperball=new Paper(200,20,PI/2)
	World.add(world,this.Paperball)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Paperball.display();
  drawSprites();
 
}



