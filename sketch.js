const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var balloon1;

var obstacle1,obstacle2;

function preload() {
    
}
function setup() {
    createCanvas(500,800);
    engine = Engine.create();
    world = engine.world;
    obstacle1=createSprite(400,200,40,40);
    obstacle1.velocityY=3;
    obstacle2=createSprite(400,200,80,40);
    obstacle2.velocityY=3;

    balloon1 = new Balloon(250,700,"red")
}
function draw() {
    background(10, 128, 202);
    Engine.update(engine);

    balloon1.display();
    handleKeyControls();
    drawSprites();
}
function handleKeyControls() {
    if (keyCode === 37) {
        balloon1.x -= 5;
    }
    if (keyCode === 39) {
    balloon1.x += 5;
    }
}