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
  keyTimeNow = millis()
  if (keyIsDown(UP_ARROW) || keyIsDown(87) && millis() >= keyTimeNow + keyDownPeriod) {
    if (playerY > 32) {
      state = "up";
      keyTimeNow = millis();
    }
  }
  if (keyIsDown(DOWN_ARROW) || keyIsDown(83) && millis() >= keyTimeNow + keyDownPeriod) {
    if (playerY < 448) {
      state = "down";
      keyTimeNow = millis();
    }
  }
  if (keyIsDown(RIGHT_ARROW) || keyIsDown(68) && millis() >= keyTimeNow + keyDownPeriod) {
    if (playerX < 480) {
      state = "right"
      keyTimeNow = millis();
    }
  }
  if (keyIsDown(LEFT_ARROW) || keyIsDown(65) && millis() >= keyTimeNow + keyDownPeriod)) {
    
  }
  // let keyTimeNow = millis();
  // if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
  //   if (playerY > 32) {
  //     playerY -= 32;
  //     if (millis() >= keyTimeNow + keyDownPeriod)
  //       playerY -= 32;
  //       keyTimeNow = millis();
  //     console.log(millis(), keyTimeNow, keyDownPeriod);
  //   }
  // }
  // if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
  //   if (playerY < 448) {
  //     playerY += 32;
  //   }
  // }
  // if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
  //   if (playerX < 480) {
  //     playerX += 32;
  //   }
  // }
  // if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
  //   if (playerX > 32) {
  //     playerX -= 32;
  //   }
  // }
}

function movement(){
  if (state === "up"){
    playerY -= 32;
  }
}

function draw() {
  movement()
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
