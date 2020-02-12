// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let cnv;
let d;
let g;
let savage;
function preload(){

}
function preload(){
  savage = loadImage("assests/21savage.png");
}

function setup() {
  cnv = createCanvas(100, 100);
  cnv.mouseWheel(changeSize);
  d = 10;
  g = 100;
}

function draw() {
  background(image(savage, width, height));
  image(savage, 0, 0, d, d);
}

function mouseWheel() {
  g = g + 10;
}

function changeSize(event) {
  if (event.deltaY > 0) {
    d = d + 10;
  } else {
    d = d - 10;
  }
}