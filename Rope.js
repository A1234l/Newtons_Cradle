class Rope{
    constructor(b1,b2,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var ropeProps = {
            bodyA : b1,
            bodyB : b2,
            pointB: {x:this.offsetX,y:this.offsetY}
            // stiffness : 0.05
        }
        this.Rope = Matter.Constraint.create(ropeProps);
        World.add(world, this.Rope);
    }
    display(){
        var posA = this.Rope.bodyA.position;
        var posB = this.Rope.bodyB.position;
        var pB = this.Rope.pointB.position;
        line(posA.x,posA.y,posB.x,posB.y,pB);
    }
}