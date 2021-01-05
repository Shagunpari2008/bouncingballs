const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var ball2,ball3,ball4;
var box;

function setup(){
    var canvas = createCanvas(500,400);
    engine = Engine.create();
    world = engine.world;

    box = Bodies.circle(200,200,50, ball_options);
    World.add(world,box)
    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,500,20,ground_options);
    World.add(world,ground);

    var ball_options ={
        restitution: 1
    }
    ball = Bodies.circle(100,100,20, ball_options);
    World.add(world,ball);
  

 var ball2_options ={
        restitution: 1
    }
    ball2 = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball2);
  
 
  var ball3_options ={
        restitution: 1
    }
    ball3 = Bodies.circle(300,100,20, ball_options);
    World.add(world,ball3);
  
  
  
  var ball4_options ={
        restitution: 1
    }
    ball4 = Bodies.circle(400,100,20, ball_options);
    World.add(world,ball4);
}

function draw(){
    background(0);
   
    box.position.x = mouseX;
    box.position.y = mouseY;
    
    Engine.update(engine);
    
    push();
    strokeWeight(6);
    stroke("green");
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,600,20);
    pop();
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,600,20);

    push();
    strokeWeight(4);
    stroke("orange");
    rectMode(CENTER);
    rect(ball.position.x, ball.position.y, 20, 20);
    pop();
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);
  
    ellipseMode(RADIUS);
    ellipse(ball2.position.x, ball2.position.y, 20, 20);
  
    ellipseMode(RADIUS);
    ellipse(ball3.position.x, ball3.position.y, 20, 20);
  
    ellipseMode(RADIUS);
    ellipse(ball4.position.x, ball4.position.y, 20, 20);
    
    push();
    strokeWeight(4);
    stroke("red");
    rectMode(CENTER);
    rect(box.position.x, box.position.y, 20, 20);
    pop();
    ellipseMode(RADIUS);
    ellipse(box.position.x, box.position.y, 50, 50);

  drawSprites();
  }
