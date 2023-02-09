var canvas;
var backgroundImage, bgImg, spaceship1, spaceship2, space;
var database, gameState;
var form, player, playerCount;
var allPlayers, spaceship1, spaceship2, fuels, powerCoins;
var spaceships = [];
var fuelImage, powerCoinImage, lifeImage
var obstacle1, obstacle1Image, obstacle2, obstacle2Image;
var blastImage; 

//BP
function preload() {
  backgroundImage = loadImage("assets/background.png");
  spaceship1 = loadImage("assets/spaceship1.png");
  spaceship2 = loadImage("assets/spaceship2.png");
  space = loadImage("assets/space.png");
  fuelImage = loadImage("assets/fuel.png");
  powerCoinImage = loadImage("assets/goldCoin.png");
  lifeImage = loadImage("assets/life.png")
  obstacle1 = loadImage("assets/obstacle1.png")
  obstacle2 = loadImage("assets/obstacle2.png")
  blastImage = loadImage("assets/blast.png")

}

//BP
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
 
}

//BP
function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
