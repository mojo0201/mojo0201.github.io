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
let keyDownPeriod = 500;
let keyTimeNow;
let ratTimeNow = 0;
let up = false;
let down = false;
let right = false;
let left = false;
let state;


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
  let chance = Math.ceil(random(0, 4));
  if (chance === 1) {
    if (ratY > 32) {
      ratY = ratY - 32;
    }
  }
  else if (chance === 2) {
    if (ratY < 448) {
      ratY = ratY + 32;
    }
  }
  else if (chance === 3) {
    if (ratX < 480) {
      ratX = ratX + 32;
    }
  }
  else if (chance === 4) {
    if (ratX > 32) {
      ratX = ratX - 32;
    }
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW || key === "w") {
    if (playerY > 32) {
      up = true;
    }
  }
  if (keyCode === DOWN_ARROW || key === "s") {
    if (playerY < 448) {
      down = true;
    }
  }
  if (keyCode === RIGHT_ARROW || key === "d") {
    if (playerX < 480) {
      right = true;
    }
  }
  if (keyCode === LEFT_ARROW || key === "a") {
    if (playerX > 32) {
      left = true;
    }
  }
}

function keyReleased() {
  if (keyCode === UP_ARROW || key === "w") {
      up = false;
  }
  if (keyCode === DOWN_ARROW || key === "s") {
    down = false;
  }
  if (keyCode === RIGHT_ARROW || key === "d") {
    right = false;
  }
  if (keyCode === LEFT_ARROW || key === "a") {
      left = false;
  }
}

function movement() {
  if (playerX === ratX && playerY === ratY) {
    state = "battle"
  }
  if (up === true && millis() >= keyTimeNow + keyDownPeriod) {
    keyTimeNow = millis();
    if (playerY > 32) {
      playerY -= 32;
      keyTimeNow = millis();
    }
  }
  if (down === true && millis() >= keyTimeNow + keyDownPeriod) {
    keyTimeNow = millis();
    if (playerY < 448) {
      playerY += 32;
      keyTimeNow = millis();
    }
  }
  if (right === true && millis() >= keyTimeNow + keyDownPeriod) {
    keyTimeNow = millis();
    if (playerX < 480) {
      playerX += 32;
      keyTimeNow = millis();
    }
  }
  if (left === true && millis() >= keyTimeNow + keyDownPeriod) {
    keyTimeNow = millis();
    if (playerX > 32) {
      playerX -= 32;
      keyTimeNow = millis();
    }
  }
}


function draw() {
  movement();
  background(bgOne);
  image(player, playerX, playerY, 32, 32);
  image(rat, ratX, ratY, 32, 32);

  if (ratX !== playerX && ratY !== playerY) {
    if (millis() >= ratTimeNow + period) {
      ratMovement();
      ratTimeNow = millis()
    }
  }
  else if (ratX === playerX && ratY !== playerY) {
    if (millis() >= ratTimeNow + period) {
      ratMovement();
      ratTimeNow = millis()
    }
  }
  else if (ratX !== playerX && ratY === playerY) {
    if (millis() >= ratTimeNow + period) {
      ratMovement();
      ratTimeNow = millis()
    }
  }
}
