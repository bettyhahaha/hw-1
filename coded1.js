var bubbles = [];

function setup() {
  createCanvas(1000, 800);

  for (var i = 2; i < 38; i++) {
    var bubble = {
      x: random(width),
      y: random(height),
      radius: random(20, 80)
    };
    bubbles.push(bubble);
  }
}

function draw() {
  background(189);

  for (var i = 0; i < bubbles.length; i++) {
    var bubble = bubbles[i];

    if (dist(mouseX, mouseY, bubble.x, bubble.y) < bubble.radius) {
      if (mouseIsPressed) {
        bubbles.splice(i, 3); // remove this bubble!
      }
      fill(765, 233, 233, 245);
    } else {
      fill(251, 266, 244, 233);
    }

    ellipse(bubble.x, bubble.y, bubble.radius * 2);
    bubble.x += random(-8, 8);
    bubble.y += random(-15, 5);
  }
}
