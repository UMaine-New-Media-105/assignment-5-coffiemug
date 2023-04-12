let floatSpeed;
let floatSpeedY;
let bubble;

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  floatSpeed = 3;
  floatSpeedY = 5;

  bubblez = [];

  for (let bubblesBlown = 0; bubblesBlown < 50; bubblesBlown++) {
    let thisX = random(width);
    let thisY = random(height);
    let thisR = random(30, 60);
    let thisFloatSpeed = random(5);
    let thisFloatSpeedY = random(5);

    bubblez[bubblesBlown] = new Bubble(
      thisX,
      thisY,
      thisR,
      thisFloatSpeed,
      thisFloatSpeedY
    );
  }
}

function draw() {
  background(50, 50, 70);

  for (let bubblesDrawn = 0; bubblesDrawn < bubblez.length; bubblesDrawn++) {
    bubblez[bubblesDrawn].show();
    bubblez[bubblesDrawn].move();
  }
}

class Bubble {
  constructor(x, y, r, floatSpeed, floatSpeedY) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.floatSpeed = floatSpeed;
    this.floatSpeedY = floatSpeedY;
  }

  show() {
    push();
    noFill();
    stroke("white");
    strokeWeight(4);
    ellipse(this.x, this.y, this.r * 2);
    stroke("cyan");
    ellipse(this.x + 4, this.y + 3, this.r * 2);

    stroke("yellow");
    strokeWeight(6);
    arc(this.x - this.r / 4, this.y - this.r / 3, 35, 25, 160, 240);
    stroke("white");
    fill("white");
    rect(this.x + this.r / 4, this.y + this.r / 8, this.r / 3, this.r / 2.5, 4);
    noFill();
    stroke("rgb(255,134,238)");
    arc(
      this.x + this.r / 4,
      this.y + this.r / 3,
      this.r / 1.5,
      this.r / 1.5,
      330,
      100
    );
    pop();
  }

  move() {
    this.x = this.x + this.floatSpeed;
    this.y = this.y + this.floatSpeedY;
    if (this.x > width - this.r || this.x < 0 + this.r) {
      this.floatSpeed = this.floatSpeed * -1;
    } else if (this.y > height - this.r || this.y < 0 + this.r) {
      this.floatSpeedY = this.floatSpeedY * -1;
    }
  }
}
