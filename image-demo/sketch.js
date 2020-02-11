// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let savage;

function preload(){
  savage = loadImage("assets/21savage.png")
}


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  // fill(random(0,255),random(0,255),random(0,255),random(0,255))
  // rect(mouseX - 25, mouseY - 25, 50, 50)
  image(savage, mouseX, mouseY, width -100, 100)  
}
