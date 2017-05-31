var balls = [];
var box;
var count = 0;

function setup() {
  createCanvas(500,275);
  for(var i = 0; i < 1; i++){
    balls[i] = new Ball();
  }
  box = new Box();
  frameRate(7);
  
}

function draw() {
    this.count++;
    background(255);
    for(var i = 0; i < balls.length; i++){
      balls[i].show();
          if(this.count == 10){
            for(var j = 0; j < balls.length; j++){
              balls[j].record();
            }
          }
      balls[i].move();
  }
    if(this.count == 10){
      for(var k = 0; k < 11; k++){
        box.show();
      }
        noLoop();
  }
}

function Ball(){
  this.r = 10;
  this.x = 250;
  this.y = 0+this.r;
  this.position = 6;
  
  this.show = function(){
    fill(255,100,100);
    ellipseMode(CENTER);
    ellipse(this.x,this.y,this.r*2);
  }
  
  this.move = function(){
    console.log(this.position);
    this.y += 25;
    var temp = Math.random()*2;
    if(temp < 1){
      this.x -= 50;
      this.position --;
    }else{
      this.x += 50;
      this.position ++;
    }
  }
  
  this.record = function(){
    console.log("This ball landed at " + this.position);
  }
}

function Box(){
  this.x = -12;
  this.y = 250;
  this.dimension = 25;
  this.count = 0;
  
  this.show = function(){
    this.count++;
    fill(255);
    rect(this.x, this.y, this.dimension*2, this.dimension);
    fill(0);
    textAlign(CENTER);
    text(this.count, this.x+12, this.y+12);
    this.x += 50;
    }
  }
}