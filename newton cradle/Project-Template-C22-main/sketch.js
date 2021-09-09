const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);
   
	bob1 = new Bob(310,300);
	bob2 = new Bob(350,300);
	bob3 = new Bob(390,300);
	bob4 = new Bob(430,300);
	bob5 = new Bob(480,300);


	rope1 = new Rope(bob1,roof,-80,0);
	rope2 = new Rope(bob1,roof,-40,0);
	rope3 = new Rope(bob1,roof,0,0);
	rope4 = new Rope(bob1,roof,40,0);
	rope5 = new Rope(bob1,roof,80,0);
	
	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  //create ellipse shape for multiple bobs here

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob1,bob1.position,{x:-50,y:-45});
	}
}
