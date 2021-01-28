var dog,sadDog,happyDog;
var feed,addfood;
var  foodObj;

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);

  feed = createButton("feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog)

  addfood = createButton("add food");
  addfood.position(800,95);
  feed.mousePressed(addfood)
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;




}

function draw() {
  background(46,139,87);
  drawSprites();
}

//function to read food Stock
function readfoodstock(){

}


//function to update food stock and last fed time
function updatefoodstock(){
  
}

//function to add food in stock
function addfoodstock(){
  
}