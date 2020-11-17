class Bird extends Base
{
    constructor(x,y)
    {
        super(x,y,50,50);
        this.image = loadImage("Sprites/bird.png");
        this.smoke = loadImage("Sprites/smoke.png");
        this.darr = [];
    
    }

    display()
    {
    /*  this.body.position.x = mouseX;
        this.body.position.y = mouseY; */
        super.display();
        if(this.body.speed>=10)
        {
            var h = this.body.position.x;
            var v = this.body.position.y;

            var arr;
            arr = [h,v]
            darr.push(arr)
            console.log(darr)
            for(var i = 0; i<darr.length; i++)
            {
                image(this.smoke,darr[i][0],darr[i][1]);
            }
        }
    }
}
