//  apply force is in behaviors so you can add mutiple steering forces
// the steering force fore each is returned from fuction
// this is a better don't touch function
class Vehicle {

  constructor(x, y, c) {

    this.pos = createVector(x, y);

    this.vel = createVector(0, 0); // a simple vector
    this.acc = createVector(0, 0);
    //this.mass = mass;
    //this.r = sqrt(mass)*10;
    this.c = c
    this.maxspeed = random(1, 5); // the mag of vec to desired target
    this.maxforce = random(0.1, 1); // the limmit to steering force
    this.size = random(width / 20, width / 10); // size mapped to screensize



  }
  // methods


  behaviors() {
    let fleeSteer;
    let arrSteer;
    let dtouch;
    let target = createVector(mouseX, mouseY);
    if (mouseIsPressed) {
      let avoid = createVector(mouseX, mouseY);
      fleeSteer = this.flee(avoid);
      dtouch = this.dontTouch(); // if you take this out they fly around when fleeing


    } else {
      arrSteer = this.arrive(target);
      dtouch = this.dontTouch();
    }
    this.applyForce(dtouch);
    this.applyForce(fleeSteer);
    this.applyForce(arrSteer);

  }


  dontTouch() {
    let steerAvg = createVector();
    let total =0;
    for (let i = 0; i < gregs.length; i++) {

      let desired = p5.Vector.sub(gregs[i].pos,this.pos);
      // only flee when they are 100 pixels near
       desired.mult(-1);
      let d = desired.mag()
      if (gregs[i] != this && d < (this.size+gregs[i].size)/2) {
        //if(d < 10){
        steerAvg.add(desired);
        total++


      }

    }
    if (total > 0){
    //steerAvg.div(total);
    steerAvg.sub(this.vel);
    //steerAvg.limit(this.maxforce+3);
      
    steerAvg.limit(this.maxforce+1);
    return steerAvg // returning to call from behaviors

    }
    

  }

  seek(target) {
    // mouse vector is now set in behaviors createVector(mouseX,mouseY); and sent in as target

    //steering force = desired velocity - current velocity
    // we get desired by .sub(target,location);
    let desired = p5.Vector.sub(target, this.pos);
    desired.set(this.maxspeed); // setting the vector to desired at maxim speed
    let steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxforce);
    return steer; // to be sent to apply force from behaviors

  }

  arrive(target) {
    // mouse vector is set in the sketch let mousepos = createVector(mouseX,mouseY); and sent in as target

    //steering force = desired velocity - current velocity
    // we get desired by .sub(target,location);
    let desired = p5.Vector.sub(target, this.pos);
    let d = desired.mag()
    if (d < 100) { // slowing down in a radius of 100 pixels
      let m = map(d, 0, 100, 0, this.maxspeed)
      desired.setMag(m);
    } else {
      desired.setMag(this.maxspeed); // setting the vector to desired at maxim speed
    }
    let steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxforce);
    return steer; // returing to call from behaviors
  }

  flee(target) {
    // mouse pressed vector is set in the sketch let mousepos = createVector(mouseX,mouseY); and sent in as target

    //steering force = desired velocity - current velocity
    // we get desired by .sub(target,location);
    let desired = p5.Vector.sub(target, this.pos);
    // only flee when they are 100 pixels near
    let d = desired.mag();
    if (d < 100) {
      desired.setMag(this.maxspeed + 3); // setting the vector to desired at maxim speed
      desired.mult(-1); // this reverses the vector away from so its really repulsed
      let steer = p5.Vector.sub(desired, this.vel);
      steer.limit(this.maxforce + 3);
      return steer // returning to call from behaviors
    }
  }

  applyForce(force) {

    this.acc.add(force);

  }

  update() {

    this.vel.add(this.acc);
    // use limit to make sure velocity does not grow out
    //this.vel.limit(this.speed);
    this.pos.add(this.vel);
    this.acc.set(0, 0);



  }

  edges() {
    if (this.pos.y > height) {
      this.pos.y = 0;
      //this.vel.y *= -1;

    }

    if (this.pos.y < 0) {
      this.pos.y = height;
      //this.vel.y *= -1;

    }
    if (this.pos.x > width) {
      this.pos.x = 0;
      //this.vel.x *= -1;
    }
    if (this.pos.x < 0) {
      this.pos.x = width;
      //this.vel.x *= -1;
    }




  }

  show() {
    //noStroke();
    fill(this.c);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);


  }

  /* show() {
    push();
    stroke(this.c);

    translate(this.pos.x, this.pos.y); // makes the head
    rotate(this.vel.heading() + radians(90)); // follow target
    //body
    fill(this.c);
    rect(0, 0, 20, 40);
    //head
    stroke(this.c);
    fill(this.c);
    // eyes
    ellipse(0, -20, 40, 20);
    fill(255, 0, 0);
    ellipse(-10, -30, 10, 10);
    ellipse(10, -30, 10, 10);
    fill(0);
    ellipse(-10, -33, 5, 5);
    ellipse(10, -33, 5, 5);
    pop();
    // print(this.vel.heading()); 

  }
*/

}