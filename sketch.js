let gameState = "center";  // Tracks the current state of the game
let img;
let img2;
let img3;
let img4;
let img5;
let img6;
let MySong;
let song;
let mario;

function preload(){
  img = loadImage ('images/walk1.png')
  img2 = loadImage ('images/walk2.png')
  img3 = loadImage ('images/walk3.png')
  img4 = loadImage('images/walk4.png')
  img5 = loadImage('images/walk5.png')
  img6 = loadImage ('images/walk6.png')
  mario = loadImage ('images/IMG_3596.gif')
  song = loadSound ('Monkeys Spinning Monkeys.mp3')
}

function setup() {
  createCanvas(1008, 756);
  textSize(16);
  soundFormats('mp3', 'ogg');
  song.play();
}

function draw() {
  background(242, 238, 203);
  

  // Handle game states
  if (gameState === "center") {
    image (img, 0, 0);
    for (let lineX = 75; lineX <= 1000; lineX += 75) {
    line(lineX, 0, lineX, height);
    }
  } else if (gameState === "forward") {
    image (img2, 0, 0);
    for (let lineX = 100; lineX <= 1000; lineX += 100) {
    line(lineX, 0, lineX, height);
    }
    } else if (gameState === "forward2") {
    image (img3, 0, 0);
    for (let lineX = 25; lineX <= 1000; lineX += 25) {
    line(lineX, 0, lineX, height);
    }
  } else if (gameState === 'left'){
    image (img4, 0, 0);
    for (let lineX = 200; lineX <= 1000; lineX += 200) {
    line(lineX, 0, lineX, height);
    }
    } else if (gameState === 'left2'){
    image (img5, 0, 0);
    for (let lineX = 10; lineX <= 1000; lineX += 10) {
    line(lineX, 0, lineX, height);
    }
    }else if (gameState === 'open'){
    image (img6, 0, 0);
    image (mario, 500, 350);
    for (let lineX = 70; lineX <= 1000; lineX += 70) {
    line(lineX, 0, lineX, height);
    }
    }
}
// Detect key presses depending on the situation
function keyPressed() {
    // Move between rooms based on current gameState
    if (gameState === "center") {
      if (key === 'W' || key === 'w') {
        gameState = "forward";   // Go forward 
      }
    } else if (gameState === "forward" && (key === 'S' || key === 's')) {
      gameState = "center";   // Return
    }else if (gameState === "forward" && (key === 'W' || key === 'w')) {
      gameState = "forward2";   // Proceed Further
    }else if (gameState === "forward2" && (key === 'S' || key === 's')) {
      gameState = "forward";
    }else if (gameState === "forward2" && (key === 'A' || key === 'a')) {
      gameState = "left";
    }else if (gameState === "left" && (key === 'D' || key === 'd')){
      gameState = "forward2";
    }else if (gameState === "left" && (key === 'W' || key === 'w')){
      gameState = 'left2';
    }else if (gameState === "left2" && (key === 'S' || key === 's')){
      gameState = "left";
    }else if (gameState === "left2" && (key === 'E' || key === 'e')){
      gameState = "open";
    }else if (gameState === "open" && (key === 'E' || key === 'e')){
      gameState = "left2";
    }
}
