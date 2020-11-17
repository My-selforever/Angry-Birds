class Base
{
    constructor(x,y,w,h)
    {
        this.width = w
        this.height = h
        var object_options=
        {
            restitution: 1,
            friction: 1
        }
        this.image = loadImage("Sprites/base.png")
        this.body = Bodies.rectangle(x,y,w,h,object_options);
        World.add(world,this.body);

    }
    display ()
    {
        push();
        translate (this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }

}