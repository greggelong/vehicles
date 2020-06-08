class Vehicle {

   constructor(x, y, c) {

     this.pos = createVector(x, y);

     this.vel = createVector(0, 0); // a simple vector
     this.acc = createVector(0, 0);
     //this.mass = mass;
     //this.r = sqrt(mass)*10;
     this.c = c
     this.speed = random(1,5);
    



   }
   // methods
   applyForce(force) {
      
      this.acc.add(force);
      
   }

   update() {
     
      this.vel.add(this.acc);
     // use limit to make sure velocity does not grow out
     this.vel.limit(this.speed);
     this.pos.add(this.vel);
     this.acc.set(0,0);
     


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
     push();
     stroke(this.c);
     
     translate(this.pos.x,this.pos.y); // makes the head
     rotate(this.vel.heading()+ radians(90));  // follow target
     //body
     fill(this.c);
     rect(0, 0, 20,40);
     //head
     stroke(this.c);
     fill(this.c);
     // eyes
     ellipse(0,-20,40,20);
     fill(255,0,0);
     ellipse(-10,-30,10,10);
     ellipse(10,-30,10,10);
     fill(0);
     ellipse(-10,-33,5,5);
     ellipse(10,-33,5,5);
     pop();
    // print(this.vel.heading()); 

   }


 }