class Hero {
  constructor(x,y,width,height)
	{
		var options = { 
			density: 1.2, 
			frictionAir: 1,
            restitution:0
		};
		this.body=Bodies.rectangle(x,y,width,height,options);
		this.x=x;
		this.y=y;
		this.width=width;
		this.height=height;
		this.image=loadImage("superhero1.png");
	
		World.add(world, this.body);

	}
	
	display()
	{
			
			var heroPos=this.body.position;	
			var angle=this.body.angle;	
			push()
			translate(this.body.position.x,this.body.position.y);
			rectMode(CENTER)
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.width,this.height)
			pop()
			
	}
}
