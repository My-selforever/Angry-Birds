class Ground
{
    constructor(x,y,w,h)
    {
        this.width = w
        this.height = h

        var ground_Options = 
        {
            'isStatic': true
        }
           this.body = Bodies.rectangle(x,y,w,h,ground_Options);
           World.add(world,this.body);

    }
    display (color)
    {
        rectMode(CENTER);
        fill(color);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        
    }

}