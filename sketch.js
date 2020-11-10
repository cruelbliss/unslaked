// A sound file object
let song;
let v;
var r = 0;
var b = 255;
let count;
let Play;

function preload() {
  // Load a sound file
  v = loadSound('Yep.m4a');
  song = loadSound('bip.mp3');
  Play = loadFont('Play-Regular.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  count = 1;
  // Loop the sound forever
  // (well, at least until stop() is called)
  
}

function draw() {

  noStroke();
  r = map(mouseX, 0, 1920, 0, 255);
  b = map(mouseX, 0, 1000, 255, 0);
  background(r, 0, b, 30);
  fill(b, 118, r);
  ellipse(mouseY/0.5, mouseX/3, random(0,20), 8);
  ellipse(mouseY/1.3, mouseX/2, random(0,20), 10);
  ellipse(mouseX/1.3, mouseY/2, random(0,20), 8);
  ellipse(mouseX, mouseY, random(0,200), 100);
  textSize(width/16);
  textFont(Play);
  
  fill(mouseY, 100, 150, 45);
  text('flame', width/2.5, width/8);
  fill(mouseY, 100, 150, 70)
  text('flame', width/2.5, width/7);
  fill(mouseY, 100, 150, 150)
  text('flame', width/2.5, width/6);
  
  text('like', mouseY/2, mouseY);
  text('moths', mouseY, mouseY);
  fill(0, 100, 300, 51);
  text('to', mouseX/2, mouseY/2);
  text('false beacon', mouseX, 290);

  // Set the volume to a range between 0 and 1.0
  let volume = map(mouseX, 0, width, 0, 1.6);
  volume = constrain(volume, 0.3, 1);
  song.amp(volume);
  v.amp(volume);

  // Set the rate to a range between 0.1 and 4
  // Changing the rate alters the pitch
  let speed = map(mouseY, 0.5, height, 0, 2.2);
  speed = constrain(speed, 0.5, 2.2);
  song.rate(speed);
  v.rate(speed);
  if (count > 1) {
    stroke(236, 255, 94);
    fill(51, 100);
    ellipse(mouseX, 100, 48, 48);
    stroke(236, 255, 94);
    fill(51, 100);
    ellipse(100, mouseY, 48, 48);
    count = constrain(count, 0, 2);
  } 
}
function touchStarted() {
    if (count < 3) {
    song.loop();
    v.loop(); 
   } else  {
    v.stop();   
}
 count++; 
}
