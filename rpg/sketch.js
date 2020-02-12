// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let bg;
let player;
let playerX;
let playerY;

function preload() {
  bg = loadImage("assets/backround.png")
  player = loadImage("assets/player.png")
}

function setup() {
  createCanvas(512, 512);
  playerX = 0;
  playerY = 0;
}


function keyPressed() {
  if (keyCode === UP_ARROW || key === "w") {
    playerY = playerY - 32;
    // if (millis() + 500) {
    //   playerY = playerY - 32;
    // }
  }
  if (keyCode === DOWN_ARROW) {
    playerY = playerY + 32;
  //   if (millis() + 500) {
  //     playerY = playerY + 32;
  //   }
  }
  if (keyCode === RIGHT_ARROW) {
    playerX = playerX + 32;
  //   if (millis() + 500) {
  //     playerX = playerX + 32;
  //   }
  }
  if (keyCode === LEFT_ARROW) {
    playerX = playerX - 32;
  //   if (millis() + 500) {
  //     playerX = playerX - 32;
  //   }
  }
}

function draw() {
  background(bg);
  image(player, playerX, playerY, 32, 32)
}
