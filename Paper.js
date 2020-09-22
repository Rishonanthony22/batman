class Paper {
    constructor(x,y) {
      var ball_options = {
          isStatic: false,
         friction:0.5,
         density:1.2,
          restitution: 1, 
      }
      this.body = Bodies.circle(400,80,20,ball_options);
      
      
      World.add(world,this.body);
    }
    display(){
    
     
      ellipseMode(RADIUS);
      ellipse(this.body.position.x,this.body.position.y,20,20);
      fill("red");
    }
  };