# vehicles
## some work on autonoms agents mostly folowing nature of code style
![tadpoles](tadpoles.png)

Moving from simple particles being acted on by forces in the environment to autonomous agents reacting to their environment according to rules and steering forces. the vehicle class uses p5js vectors for position, velocity and acceleration. the built-in vector function .heading() makes it easy to rotate the vehicles. and vector math makes it easy to get the necessary force. I made a simple tadpole like vehicles with rect() and ellipse(). these just simply seek he screen touch. Following #Danielshiffman #natureofcode for implementing the code. also reading Valentino Braitenberg's book for a more philosophical discussion. #p5js #creativecoding

[Simple vehicle no behavior function](https://editor.p5js.org/greggelong/present/cwjYbjhu9)

[click here!](https://greggelong.github.io/vehicles/simpleVehicleNoBehavForceInSketch)

![vehicles](vehicles.png)

More with autonomous agents and steering behaviors. Adapting processing code from #danielshiffman #natureofcode to p5js. His work builds on the work or Craig Reynolds and Valentino Braitenberg. The vehicle class uses vectors for acceleration,velocity and position and they are modified by a steering force which is accumulated in a method called behaviors(). The particles seek the mouse position , flee if it is pressed and avoid moving over each other. this gives the impression of group like behavior. I think it looks a bit like a blob made up of parts. #p5js #creativecoding

[particles with behavior function to accumulate forces](https://editor.p5js.org/greggelong/present/PKJxeOjtN)

[click here!](https://greggelong.github.io/vehicles/particlesBehaviorFunctionTrail)

This version has the behavior function to accumulate forces. Each vehicle, here a tadpole, tries to ignore every other tadpole and seek or avoid the mouse at the same time. An average steering force for avoiding multiple tadpoles  in a certian radius is  caculated and returned in a function called dontTouch().  

[Tadpole with behvior function to accumulate forces](https://editor.p5js.org/greggelong/present/vskdpXk3k)

[click Here!](https://greggelong.github.io/vehicles/tadpoleBehaviorFunction)
