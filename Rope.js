class Rope {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 0.01,
      length: 450,
    };

    this.pointB = pointB;
    this.rope = Constraint.create(options);
    World.add(world, this.rope);
  }
    fly()
{
  this.throw.bodyA=null;
}

Launch(bodyA)
{
  this.throw.bodyA=bodyA;
}


  display() {
    if (this.rope.bodyA) {
      var pointA = this.rope.bodyA.position;
     var pointB = this.pointB;
     push();

     //set the value of stroke to hide the rope
     stroke(255);
     strokeWeight(4);

     line(pointB.x, pointB.y, pointA.x, pointA.y);

     pop();
   }
 }
}
