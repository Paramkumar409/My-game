
var backgroundImage, boy

function preload() {
  backgroundImage = loadImage("bg.jpg");
  boyImage = loadImage("boy1.png");
  gilliImage = loadImage("gilli.png")

}

function setup() {
  createCanvas(windowWidth, windowHeight);



  boy = createSprite(80, height - 120)
  boy.addImage(boyImage)
  boy.setCollider("rectangle" , 0,0, 180,230)

  gilli = createSprite(200, 230)
  gilli.addImage(gilliImage)
  gilli.scale = 0.2
  gilli.setCollider("rectangle" , 0,0, 400,460)

}

function draw() {
  background(backgroundImage);

  boy.velocityX = 8

  /*
  if(keyDown("SPACE")) {
    gilli = createSprite(boy.x, boy.y)
    gilli.addImage(gilliImage)
    gilli.velocityX = 5
    gilli.scale = 0.2
  }
  */

  drawSprites()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function createGilli() {

  //gilli.rotation = gilli.rotation + 10
}