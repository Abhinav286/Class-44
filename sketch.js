var hero, villain;
var obs1, ground;


function preload() {

  heroImg = loadImage("./images/bnDeka.png");
  villain = loadImage("./images/villain.webp");
  obs1 = loadImage("./images/obstacle.jpg");
  ground = loadImage("./images/ground image.jpg");



}




function setup() {
  createCanvas(1200, 800);
  hero = createSprite(100, 100, 50, 40);
  hero.addImage(heroImg);
  hero.scale = 0.3;

  ground = createSprite(100, 100);
  ground.addImage(ground);






}

function draw() {
  background(220);




  drawSprites();
}