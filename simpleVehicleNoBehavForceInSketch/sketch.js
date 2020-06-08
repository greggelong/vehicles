let gregs = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  //greg = new Vehicle(width/2,height/2,color(255,255,0));
  rectMode(CENTER);
  for (let i =0;i<10;i++){
    gregs[i] = new Vehicle(random(width),random(height),color(random(255),random(255),0));
    
    
  }
}

function draw() {
  background(0,0,220);
  
  for (let i = 0; i <gregs.length;i++){
  let mousepos = createVector(mouseX,mouseY);
  let seek = p5.Vector.sub(mousepos,gregs[i].pos);
  seek.setMag(0.1);
  gregs[i].applyForce(seek);
  gregs[i].update();
  gregs[i].edges();
  gregs[i].show();
  }
}