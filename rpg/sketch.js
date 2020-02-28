// RPG
// Seth Jones
// 2/12/2020

//stats
let illusion = 15;
let conjuration = 15;
let destruction = 15;
let restoration = 15;
let alteration = 15;
let enchanting = 15;
let smithing = 15;
let heavyArmor = 15;
let block = 15;
let twoHanded = 15;
let oneHanded = 15;
let archery = 15;
let lightArmor = 15;
let sneak = 15;
let lockpicking = 15;
let pickpocket = 15;
let speech = 15;
let alchemy = 15;

let bgOne;
let player;
let playerX = 256;
let playerY = 256;
let ratX = 384;
let ratY = 384;
let chance;
let bgNum = 1;
let ratPeriod = 1000;
let keyDownPeriod = 250;
let keyTimeNow;

let rat;
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




  //Movement Keys
  if (keyCode === UP_ARROW || key === "w") {
    if (playerY > 32) {
      up = true;
      keyTimeNow = millis();
    }
  }
  if (keyCode === DOWN_ARROW || key === "s") {
    if (playerY < 448) {
      down = true;
      keyTimeNow = millis();
    }
  }
  if (keyCode === RIGHT_ARROW || key === "d") {
    if (playerX < 480) {
      right = true;
      keyTimeNow = millis();
    }
  }
  if (keyCode === LEFT_ARROW || key === "a") {
    if (playerX > 32) {
      left = true;
      keyTimeNow = millis();
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
    state = "battle";
    up = false;
    down = false;
    right = false;
    left = false;

  }
  if (up === true && millis() >= keyTimeNow + keyDownPeriod) {
    if (playerY > 32) {
      playerY -= 32;
      keyTimeNow = millis();
    }
  }
  if (down === true && millis() >= keyTimeNow + keyDownPeriod) {
    if (playerY < 448) {
      playerY += 32;
      keyTimeNow = millis();
    }
  }
  if (right === true && millis() >= keyTimeNow + keyDownPeriod) {
    if (playerX < 480) {
      playerX += 32;
      keyTimeNow = millis();
    }
  }
  if (left === true && millis() >= keyTimeNow + keyDownPeriod) {
    if (playerX > 32) {
      playerX -= 32;
      keyTimeNow = millis();
    }
  }
}

// function states(){
//   if (state === "battle") {
//   }
// }


function draw() {
  movement();
  background(bgOne);
  image(player, playerX, playerY, 32, 32);
  image(rat, ratX, ratY, 32, 32);

  if (ratX !== playerX && ratY !== playerY) {
    if (millis() >= ratTimeNow + ratPeriod) {
      ratMovement();
      ratTimeNow = millis();
    }
  }
  else if (ratX === playerX && ratY !== playerY) {
    if (millis() >= ratTimeNow + ratPeriod) {
      ratMovement();
      ratTimeNow = millis();
    }
  }
  else if (ratX !== playerX && ratY === playerY) {
    if (millis() >= ratTimeNow + ratPeriod) {
      ratMovement();
      ratTimeNow = millis();
    }
  }
}
