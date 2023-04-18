let groundHeight;
let floatSpeed;

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  groundHeight = 380;
  //floatSpeed=0
  flowerColor = [
    "orchid",
    "pink",
    "orange",
    "gold",
    "lemonchiffon",
    "tomato",
    "hsl(345,100%,70%)",
    "peachpuff",
  ];
  //define flowers
  flowerField = [];
  for (let flowersInField = 0; flowersInField < 300; flowersInField++) {
    let x = random(width);
    let y = random(groundHeight - 7, 800);
    let r = random(20, 30);
    let c = random(flowerColor);
    flowerField.push(new Flower(x, y, r, c));
  }

  //define bubbles
  bubbles = [];
  for (let bubblesToBe = 0; bubblesToBe < 20; bubblesToBe++) {
    let x = 60;
    let y = random(40, height - groundHeight / 3);
    let r = random(30, 60);
    let floatSpeed = random(4, 7);
    bubbles.push(new Bubble(x, y, r, floatSpeed));
  }
  //define butterflies
  butterflies = [];
  for (let butterfliesAlive = 0; butterfliesAlive < 5; butterfliesAlive++) {
    let x = 750;
    let y = random(50, height - groundHeight / 3);
    let flySpeed = random(5, 9);
    butterflies.push(new Butterfly(x, y, flySpeed));
  }
}

function draw() {
  background("deepskyblue");
  //grass
  noStroke();
  fill("hsl(100,70%,60%)");
  rect(0, groundHeight, width, 800);
  //flower particles
  for (
    let flowersGrown = 0;
    flowersGrown < flowerField.length;
    flowersGrown++
  ) {
    flowerField[flowersGrown].move();
    flowerField[flowersGrown].show();
  }
  //bubble breeders
  for (let bubblesBlown = 0; bubblesBlown < bubbles.length; bubblesBlown++) {
    bubbles[bubblesBlown].show();
    bubbles[bubblesBlown].move();
  }
  //butterfly catchers
  for (
    let butterfliesFlying = 0;
    butterfliesFlying < butterflies.length;
    butterfliesFlying++
  ) {
    butterflies[butterfliesFlying].show();

    butterflies[butterfliesFlying].move();
  }
}

//particle class: flowers
class Flower {
  constructor(x, y, r, c) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.c = c;
  }

  move() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
  show() {
    push();
    translate(this.x, this.y);
    rotate(-35);
    for (let petalCount = 0; petalCount < 4; petalCount++) {
      noStroke();
      fill(this.c);
      ellipse(0, 0, this.r);
      triangle(-this.r / 2, -3, this.r / 2, -3, 0, -this.r * 1.5);
      rotate(25);
    }
    pop();
  }
}

//breeder class, bubbles
class Bubble {
  constructor(x, y, r, floatSpeed) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.floatSpeed = floatSpeed;
  }

  move() {
    this.x = this.x + this.floatSpeed;
    this.y = this.y; //+ random(3);
    if (this.x + this.r >= width || this.x - this.r <= 0) {
      this.floatSpeed = -this.floatSpeed;
    }
  }

  show() {
    push();
    translate(this.x, this.y);
    noFill();
    stroke("white");
    strokeWeight(4);
    ellipse(0, 0, this.r * 2);
    stroke("cyan");
    ellipse(4, 3, this.r * 2);

    stroke("yellow");
    strokeWeight(6);
    arc(-this.r / 4, -this.r / 3, 35, 25, 160, 240);
    stroke("white");
    fill("white");
    rect(this.r / 4, this.r / 8, this.r / 3, this.r / 2.5, 4);
    noFill();
    stroke("rgb(255,134,238)");
    arc(this.r / 4, this.r / 3, this.r / 1.5, this.r / 1.5, 330, 100);
    pop();
  }
}

//catchers aka bubble poppers aka butterflies
class Butterfly {
  constructor(x, y, flySpeed) {
    this.x = x;
    this.y = y;
    this.flySpeed = flySpeed;
  }

  show() {
    push();
    translate(this.x, this.y);
    stroke("navy");
    fill("rgb(246,150,0)");
    arc(-40, 0, 80, 100, -100, 100);
    arc(40, 0, 80, 100, 80, 280);
    noStroke();
    fill("darkslategrey");
    ellipse(0, 0, 5, 50);
    pop();
  }

  move() {
    this.x = this.x - this.flySpeed;
    //this.y=random(-5,5);
    if (this.x > width || this.x < 0) {
      this.flySpeed = -this.flySpeed;
    }
  }
}
