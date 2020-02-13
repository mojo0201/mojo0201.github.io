// RPG
// Seth Jones
// 2/12/2020
//

let bg;
let player;
let playerX = 256;
let playerY = 256;
let ratX = 384;
let ratY = 384;
let chance;

function preload() {
  bg = loadImage("assets/backroundOne.png");
  player = loadImage("assets/player.png");
  rat = loadImage("assets/rat.png");
}

function setup() {
  createCanvas(512, 512);
  frameRate(30);
  
}


function keyPressed() {
  if (keyCode === UP_ARROW || key === "w") {
    if (playerY > 0) {
      playerY = playerY - 32;  
    }

  }
  if (keyCode === DOWN_ARROW || key ==="s") {
    if (playerY < 480) {
      playerY = playerY + 32;
    }
    
  }
  if (keyCode === RIGHT_ARROW || key === "d") {
    if (playerX < 480) {
      playerX = playerX + 32;
    }
        
  }
  if (keyCode === LEFT_ARROW || key === "a") {
    if (playerX > 0){
      playerX = playerX - 32;
    }
    
  }
}

function draw() {
  background(bg);
  image(player, playerX, playerY, 32, 32);
  image(rat, ratX, ratY, 32, 32);
  for (let i = 0; i < 10; i++){
    delayTime(1)
    let chance = random(1,4);
    if (chance === 1) {
      ratY = ratY - 32;
      delayTime(2)
    }
    else if (chance === 2) {
      ratY = ratY + 32;
      delayTime(2)
    }
    else if (chance === 3) {
      ratX = ratX + 32;
      delayTime(2)
    }
    else if (chance === 4) {
      ratX = ratX - 32;
      delayTime(2)
    }
  }
}
