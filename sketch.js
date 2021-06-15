var iss, issImg;
var spaceC1, spaceC2, spaceC3, spaceC4, spacec1Img,spacec2Img,spacec3Img,spacec4Img;
var spaceBg, spacebgImg;

function preload(){
  spacebgImg = loadImage("Docking-undocking/spacebg.jpg")
  issImg = loadImage("Docking-undocking/iss.png")
  spacec1Img = loadImage("Docking-undocking/spacecraft1.png")
  spacec2Img = loadImage("Docking-undocking/spacecraft2.png")
  spacec3Img = loadImage("Docking-undocking/spacecraft3.png")
  spacec4Img = loadImage("Docking-undocking/spacecraft4.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  spaceBg = createSprite(700, 400, 20, 20)
  spaceBg.scale = 2.3
  spaceBg.addImage(spacebgImg)

  iss = createSprite(800, 300, 20, 20)
  iss.addImage(issImg)

  spaceC1 = createSprite(600, 600, 20, 20)
  spaceC1.scale = 0.5
  spaceC1.addImage(spacec1Img)
}

function draw() {
  background(255,255,255);  
  drawSprites();
}

if(keyDown("UP_ARROW")){
  spaceC2.scale = 0.5
  spaceC2.addImage(spacec2Img)
  spaceC2.y = spaceC2.y - 20;
}
if(keyDown("LEFT_ARROW")){
  spaceC3.scale = 0.5
  spaceC3.addImage(spacec3Img)
  spaceC3.x = spaceC2.x - 20;
}
if(keyDown("RIGHT_ARROW")){
  spaceC4.scale = 0.5
  spaceC4.addImage(spacec4Img)
  spaceC4.x = spaceC2.x + 20;
}
if(keyDown("DOWN_ARROW")){
  spaceC2.scale = 0.5
  spaceC2.addImage(spacec2Img)
}
