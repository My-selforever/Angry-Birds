class Pig extends Base
{
    constructor(x,y)
    {
       super(x,y,50,50);
       this.t = 255
       this.image = loadImage("Sprites/pig.png");
       
    }

    display()
        {
            if(this.body.speed<3)
            {
             //  console.log(this.body.speed);
            super.display()
            }       
            else
            {   push();
                World.remove(world,this.body)
                tint(255,this.t)
                this.t = this.t-3
                image(this.image,this.body.position.x,this.body.position.y,50,50);
                pop();
            }
            }
        }