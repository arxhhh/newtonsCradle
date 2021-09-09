class Bob{
    constructor(x,y){
        this.body=Bodies.circle(x,y,20);
        World.add(world,this.body);


    }

    display(){
        var pos=this.body.position;
        ellipse1(pos.x,pos.y,20,20);
        ellipse2(pos.x,pos.y,20,20);
        ellipse3(pos.x,pos.y,20,20);
        ellipse4(pos.x,pos.y,20,20);
        ellipse5(pos.x,pos.y,20,20);
        
        }
    
}