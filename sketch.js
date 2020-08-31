var helicopterIMG, helicopterSprite, packageSprite,Body1,Body2,Body3,packageIMG;
var packageBody,ground,Body;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

 //Body = createSprite(350,700,200,20);
 Body2 = createSprite(349,700,20,100);
 Body3 = createSprite(449,700,20,100);
 Body1.shapeColor = ("red");
 Body2.shapeColor = ("red");
 Body3.shapeColor = ("red");
 Matter.Body.setStatic(Body3,true);
 Matter.Body.setStatic(Body2,true);
 Matter.Body.setStatic(Body1,true);

	engine = Engine.create();
	world = engine.world

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	Body = Bodies.rectangle(350 , 700 , 200 ,20, {restitution:0, isStatic:true});
	Body2 = Bodies.rectangle(349 , 700 , 20 ,100, {restitution:0, isStatic:true});
	Body3 = Bodies.rectangle(449 , 700 , 20 ,100, {restitution:0, isStatic:true});
	World.add(world, packageBody);
	World.add(world, packageBody);
	World.add(world, Body);
	World.add(world, Body2);
	World.add(world, Body3);
	
	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	
	Matter.Body.setStatic(packageBody,false);
	packageBody.scale=2;
	

  }
}



