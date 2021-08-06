class Monster {
  constructor(x,y,width,height)
	{
		var options = { 
			density: 5, 
			frictionAir: 0,
			isStatic: true
		};
		this.body=Bodies.rectangle(x,y,width,height,options);
		this.x=x;
		this.y=y;
		this.width=width;
		this.height=height;
		this.image=loadImage("monster.png");
		
		World.add(world, this.body);

	}
	display()
	{
			
			var santaPos=this.body.position;		
			push()
			translate(this.body.position.x,this.body.position.y);
			rectMode(CENTER)
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.width, this.height)
			pop()
			
	}
}
