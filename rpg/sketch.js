// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let bg;
let player;

function preload() {
  bg = loadImage("assets/backround.png")
  player = loadImage("assets/player.png")
}

function setup() {
  createCanvas(512, 512);
}


function keyPressed() {
  if (keyCode === UP_ARROW) {
    squareY = squareY - 32;
    // if (millis() + 500) {
    //   squareY = squareY - 32;
    // }
  }
  if (keyCode === DOWN_ARROW) {
    squareY = squareY + 32;
  //   if (millis() + 500) {
  //     squareY = squareY + 32;
  //   }
  // }
  if (keyCode === RIGHT_ARROW) {
    squareX = squareX + 32;
  //   if (millis() + 500) {
  //     squareX = squareX + 32;
  //   }
  // }
  if (keyCode === LEFT_ARROW) {
    squareX = squareX - 32;
  //   if (millis() + 500) {
  //     squareX = squareX - 32;
  //   }
  // }
}

function draw() {
  background(bg);
  image(player, 0, 0, 32, 32)
}
