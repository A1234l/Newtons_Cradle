class Bob{
    constructor(x,y){
        var bobProps = {
            isStatic : true,
            resitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(x, y, 50,bobProps);
        // this.radius = r;
        // this.i = loadImage('paper.png');
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        fill('green');
        ellipseMode(CENTER);
        ellipse(0,0,50)
        pop();
    }
}