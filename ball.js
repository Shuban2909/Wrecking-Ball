class ball{
    constructor(x,y,r){
        var option={
            isStatic:false,
            friction:0.1,
            density:5,
        }
       this.body=Bodies.circle(x,y,r,option);
       this.r=r;
       World.add(world,this.body);
    }

       display(){
           var angle=this.body.angle
           push();
           
           translate(this.body.position.x,this.body.position.y);
           rotate(angle);
        //ellpiseMode(RADIUS);
        fill("black");
           ellipse(0,0,this.r);
           pop();
       }
    
}