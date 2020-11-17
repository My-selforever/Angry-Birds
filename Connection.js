class Attach
{
    constructor(a,b)
    {
        var constraint_Options =
        {
            bodyA:a,
            pointB:b,
            stiffness:0.02,
            length:20
        }
        this.attach = Constraint.create(constraint_Options);
        //console.log(this.attach.pointB)
        //console.log(this.attach)
        World.add(world,this.attach);
        this.sling1 = loadImage("Sprites/sling1.png");
        this.sling2 = loadImage("Sprites/sling2.png");
        this.slingb = loadImage("Sprites/slingb.png");
    }
    
    display()
    {
        image(this.sling1,170,97);
        image(this.sling2,140,97);
        if(this.attach.bodyA!=null)
        {
            var pointA = this.attach.bodyA.position;
            var pointB = this.attach.pointB;
            if(pointA.x<=200)
            {
                stroke(48,22,8)
                strokeWeight(2);
            line (pointA.x-10,pointA.y,pointB.x-10,pointB.y);
            line (pointA.x+10,pointA.y,pointB.x+10,pointB.y);
            image(this.slingb,pointA.x-15,pointA.y-5,10,25);   
            }
            else {
                stroke(48,22,8)
                strokeWeight(2);
                line (pointA.x-10,pointA.y,pointB.x-10,pointB.y);
            line (pointA.x+10,pointA.y,pointB.x+10,pointB.y);
            image(this.slingb,pointA.x+15,pointA.y+5,10,25);
            }
        }
       
    }
    fly()
    {
      this.attach.bodyA = null;
    }
}

//dif 25 1>2