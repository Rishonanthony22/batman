
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var ground;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	bob1=new Paper(100,100)
	rope1=new Rope(bob1.body,ground.body,-bobDiameter*2,0)
	bob2=new Paper(100,100)
	rope2=new Rope(bob2.body,ground.body,-bobDiameter*2,0)
	bob3=new Paper(100,100)
	rope3=new Rope(bob3.body,ground.body,-bobDiameter*2,0)
	bob4=new Paper(100,100)
	rope4=new Rope(bob4.body,ground.body,-bobDiameter*2,0)
	bob5=new Paper(100,100)
	rope5=new Rope(bob5.body,ground.body,-bobDiameter*2,0)
	ground=new Ground(400,150,500,30)
	



	Engine.run(engine);
  
}
	
  	
  


function draw() {
  rectMode(CENTER);
  background("magenta");
  
  drawSprites();

  ground.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  //rope1.display();
  //rope2.display();
  //rope3.display();
  //rope4.display();
  //rope5.display();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
	
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-69});
	
	}
	
	}
	



