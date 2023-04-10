
let bubble1;
function setup() {
  createCanvas(960, 540);
  angleMode(DEGREES);
  
  
}

function draw() {
  background(50,50,70);

  let bubble1 = new Bubble(600,200,40);
  let bubble2 = new Bubble(280,120,30);
  let bubble3 = new Bubble(200,350,50);
  let bubble4 = new Bubble(370,250,65);
  let bubble5 = new Bubble(800,230,35);
  
  //add 5 bubbles
  bubble1.move();
  bubble1.show();
  bubble2.move();
  bubble2.show();
  bubble3.move();
  bubble3.show();
  bubble4.move();
  bubble4.show();
  bubble5.move();
  bubble5.show();
}

class Bubble{
  constructor(x,y,r){
    this.x=x
    this.y=y
    this.r=r
  }
  
  move(){
    this.x=this.x+random(-5,5);
    this.y=this.y+random(-5,5);
  }
  
  show(){
    push();
   // translate(this.x,this.y);
    noFill()
    stroke('white');
    strokeWeight(4);
    ellipse(this.x,this.y,this.r*2);
    strokeWeight(6);
    arc(this.x-this.r/4,this.y-this.r/3,35,25,160,240);
    fill('white');
    rect(this.x+this.r/3,this.y+this.r/8,this.r/3,this.r/2.5,4);
    pop();
    
  }
}
