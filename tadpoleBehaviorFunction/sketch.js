let gregs = [];

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  background(0,0,220);
  rectMode(CENTER)
  //greg = new Vehicle(width/2,height/2,color(255,255,0));
  
  for (let i =0;i<15;i++){
    gregs[i] = new Vehicle(random(width),random(height),color(random(255),random(255),0));
    
    
  }
}

function draw() {
  //fill(0,0,220,6);
  //rect(0,0,width,height);
  background(0,0,220);
  for (let i = 0; i <gregs.length;i++){
  //let mousepos = createVector(mouseX,mouseY);
  gregs[i].behaviors();
  //gregs[i].applyForce(seek);
  gregs[i].update();
  gregs[i].edges();
  gregs[i].show();
  }
  //noLoop();
}