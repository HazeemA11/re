const Engine=Matter.Engine
const Bodies= Matter.Bodies
const World=Matter.World
const Constraint=Matter.Constraint
var engine,world,ball,rope,rope2,rope3,rope4,rope5,ground;


function setup(){
createCanvas(3000,800)
engine=Engine.create()
world=engine.world
ground=new Ground(600,600,1200,20)
rope= new Rope (500,50)
rope2=new Rope(500,100)
rope3=new Rope(500,150)
rope4=new Rope(500,200)
rope5=new Rope(500,250)

}



function draw(){
background(0)
Engine.update(engine)
ground.display()
ball.display()
rope.display()
rope2.display()
rope3.display()
rope4.display()
rope5.display
}




//rope=new Rope(ball.body,{x:500,y:50})
//rope2=new Rope(ball.body,{x:500,y:100})
//rope3=new Rope(ball.body,{x:500,y:150})
//rope4=new Rope(ball.body,{x:500,y:200})
//rope5=new Rope(ball.body,{x:500,y:250})