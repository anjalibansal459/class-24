const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var bird;
var pig1;
var pig2;
var log1,log2,log3,log4;

function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(530,300,50,50);
    box2 = new Box(560,100,50,50);
    box3=new Box (590,200,50,50);
    box4=new Box(500,200,50,50)
    box5=new Box(580,50,50,50)
    bird=new Bird(100,200)
pig1=new Pig(500,100)
pig2 =new Pig(520,100)
log1=new Log(700,100,200,PI/2)
log2=new Log(720,100,200,-PI/2)
log3=new Log(740,100,200,PI/5)
log4=new Log(760,100,200,-PI/5)
    ground = new Ground(500,height,1000,20)

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display()
    box4.display()
    box5.display()
    ground.display();
    bird.display()
    pig1.display();
    pig2.display()
    log1.display()
    log2.display()
    log3.display()
    log4.display()
   
}