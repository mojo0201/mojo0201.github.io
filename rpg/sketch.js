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


  if ((keyCode === UP_ARROW || key === "w")) {
    keyTimeNow = millis();
    if (playerY > 32) {
      up = true;
      keyTimeNow = millis();
    }
  }
  if ((keyCode === DOWN_ARROW || key === "s") && millis() >= keyTimeNow + keyDownPeriod) {
    keyTimeNow = millis();
    if (playerY < 448) {
      down = true;
      keyTimeNow = millis();
    }
  }
  if ((keyCode === RIGHT_ARROW || key === "d") && millis() >= keyTimeNow + keyDownPeriod) {
    keyTimeNow = millis();
    if (playerX < 480) {
      right = true;
      keyTimeNow = millis();
    }
  }
  if ((keyCode === LEFT_ARROW || key === "a") && millis() >= keyTimeNow + keyDownPeriod) {
    keyTimeNow = millis();
    if (playerX > 32) {
      left = true;
      keyTimeNow = millis();
    }
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

function keyReleased() {
  if (keyCode === UP_ARROW || key === "w") {
    up = false;
  }
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

function movement() {
  if (playerX === ratX && playerY === ratY) {
    state = "battle"
  }
  if (state === "up" && millis() >= keyTimeNow + keyDownPeriod) {
    if (playerY > 32) {
      playerY -= 32;
    }
  }
  if (state === "down" && millis() >= keyTimeNow + keyDownPeriod) {
    if (playerY < 448) {
      playerY += 32;
    }
  }
  if (state === "right" && millis() >= keyTimeNow + keyDownPeriod) {
    if (playerX < 480) {
      playerX += 32;
    }
  }
  if (state === "left") {
    if (playerX > 32) {
      playerX -= 32;
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
