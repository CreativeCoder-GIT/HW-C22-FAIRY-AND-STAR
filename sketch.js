var starImg,bgImg;
var star, starBody;
var fairy, fairyImage;
var fairySound;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


	


function preload() {
	createCanvas(800, 750);
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//fairyImage= loadAnimation("fairyImage1.png","fairyImage2.png")
    fairyImage= loadAnimation("fairy.png");
	//fairySound=loadSound("JoyMusic.mp3")
    }
function setup(){
	createCanvas(800,750)

	fairy=createSprite(130,520)
	fairy.addAnimation("flyingFairy",fairyImage)
	fairy.scale=1

	star = createSprite(650,30); 
	star.addImage(starImg); 
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  keyPressed();

  if(star.y>470 && starBody.position.y>470)
  {
	  Matter.Body.setStatic(starBody,true)
  }

  drawSprites();

}

function keyPressed() {

	if(keyDown("right"))
	{
		fairy.x = fairy.x + 20
	}

	if(keyDown("left"))
	{
		fairy.x = fairy.x - 20
	}

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	
	
}
