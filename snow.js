class Snow{
 constructor(x,y,width,height)
   {
     var options = { 
      'friction':3,
     'density':1.0
    };
   this.body=Bodies.rectangle(x, y,width,height, options);
   this.width=width;
   this.height=height;
   this.image = loadImage("snow4.webp");
   World.add(world, this.body);
      
          }
          display()
          {
         //  var pos=this.body.position;
             push()
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height)
   
    pop()     
          }
      }