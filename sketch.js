var starImg, fairyImg, bgImg;
var fairy, fairyVoice;
var star, starBody;
var engine, world;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
  starImg = loadImage("images/star.png");
  fairyImg = loadAnimation("images/fairyImage1.png", "images/fairyImage2.png");
  bgImg = loadImage("images/starNight.png");
}

function setup() {
  createCanvas(800, 750);

  engine = Engine.create();
  world = engine.world;

  starBody = new Star(
    Math.round(random(50, 750)),
    Math.round(random(25, 75)),
    Math.round(random(25, 50))
  );
  World.add(world, starBody);

  Engine.run(engine);

  // fairyVoice.play();

  fairy = createSprite(130, 520);
  fairy.addAnimation("fairyflying", fairyImg);
  fairy.scale = 0.25;
  fairy.setCollider("rectangle", 0, 125, 750, 825);

  star = createSprite(650, 30);
  star.addImage(starImg);
  star.scale = starBody.r / 250;
}

function draw() {
  background(bgImg);

  star.x = starBody.body.position.x;
  star.y = starBody.body.position.y;

  if (keyDown(LEFT_ARROW)) {
    fairy.x -= 10;
  } else if (keyDown(RIGHT_ARROW)) {
    fairy.x += 10;
  } else if (keyDown(DOWN_ARROW)) {
    starBody.fall();
  }
  if (fairy.isTouching(star)) {
    starBody.stop();
  }

  drawSprites();
}

function keyPressed() {
  //write code here
}
