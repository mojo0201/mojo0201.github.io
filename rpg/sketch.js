// RPG
// Seth Jones
// 2/12/2020
//

let bgOne;
let player;
let playerX = 256;
let playerY = 256;
let ratX = 384;
let ratY = 384;
let chance;
let bgNum = 1;
let period = 1000;

function preload() {
  bgOne = loadImage("assets/backroundOne.png");
  player = loadImage("assets/player.png");
  rat = loadImage("assets/rat.png");
}

function setup() {
  createCanvas(512, 512);
  frameRate(30);
}

function ratMovement() {
  let chance = Math.ceil(random(0,4));
  if (chance === 1) {
    if(ratY > 32){
      ratY = ratY - 32;
    }
  }
  else if (chance === 2) {
    if (ratY < 448) {
      ratY = ratY + 32;    
    }
  }
  else if (chance === 3) {
    if (ratX < 480){
      ratX = ratX + 32;
    }
  }
  else if (chance === 4) {
    if (ratX > 32){
      ratX = ratX - 32;
    }
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW || key === "w") {
    if (playerY > 32) {
      playerY = playerY - 32;  
    }
  }
  if (keyCode === DOWN_ARROW || key ==="s") {
    if (playerY < 448) {
      playerY = playerY + 32;
    } 
  }
  if (keyCode === RIGHT_ARROW || key === "d") {
    if (playerX < 480) {
      playerX = playerX + 32;
    }  
  }
  if (keyCode === LEFT_ARROW || key === "a") {
    if (playerX > 32){
      playerX = playerX - 32;
    }
  }
}

function draw() {
  let timeNow = millis();
  background(bgOne);
  image(player, playerX, playerY, 32, 32);
  image(rat, ratX, ratY, 32, 32);

  if (ratX !== playerX && ratY !== playerY) {
    if(millis() < timeNow + period){
      console.log("here");
    }
   else if (millis() >= timeNow + period){
    ratMovement();
   }
  }
  else if (ratX === playerX && ratY !== playerY) {
    if(millis() < timeNow + period){
      console.log("here");
    }
   else if (millis() >= timeNow + period){
    ratMovement();
   }
  }
  else if (ratX !== playerX && ratY === playerY) {
    if(millis() < timeNow + period){
      console.log("here");
    }
   else if (millis() >= timeNow + period){
    ratMovement();
   }
  }
}
