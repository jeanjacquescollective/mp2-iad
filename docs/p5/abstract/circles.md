# Abstract shapes

In the beginning there were only abstract shapes and colors, luckely we know how to work with that. Don't we?

## Beautiful star

Firstly we setup the setup function, by maximising the canvas.

```js
function setup() {
  createCanvas(windowWidth, windowHeight);
}
```
In the draw function we place the following code.
```js
function draw() {
	// redraw the background in white
  background(255);
	// translate so we draw from the center of the canvas
  translate(width/2, height/2);
	// let the resolution of the circle be dependend on the position of the mouse
	// the map function make sure the values end up between 2 and 80
  let circleResolution = map(mouseY, 0, height, 2 ,80);
	// calculate the radius from the circle, take into account that we don't draw outside the canvas 
  let radius = mouseX - width / 2 + .5;
	// calculate the angle, TWO_PI is a full circle.
  let angle = TWO_PI / circleResolution;

	// set the strokeweight
  strokeWeight(mouseY / 20);

	// begin the drawing
  beginShape();
  for (let i = 0; i < circleResolution; i++) {
		// this is a math formula: https://en.wikipedia.org/wiki/Circle#Equations
    let x = cos(angle * i) * radius;
    let y = sin(angle * i) * radius;
		// draw a line to that point
    line(0,0,x,y);
  }
	// close the shape
  endShape(CLOSE);
}

```

![How sine and cosine influence the circle](/sine-cosine-circle.gif)

## Variation_01

We can also connect the outer points with each other. This is done by the following code.

```js
function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
}

function draw() {
  // background(255);
  if (mouseIsPressed && mouseButton == LEFT) {
    translate(width / 2, height / 2);
    let circleResolution = round(map(mouseY, 0, height, 3, 10), 0);
    let radius = mouseX - width / 2 + 0.5;
    let angle = TWO_PI / circleResolution;

    strokeWeight(100 / 200);
    beginShape();
    for (let i = 0; i <= circleResolution; i++) {
      let x = sin(angle * i) * radius;
      let y = cos(angle * i) * radius;
      vertex(x, y);
    }
    endShape();
  }
}

```

Instead of the line, we use vertex here. A vertex is a point.

Let's add some user interaction.

```js
function keyReleased() {
  if (keyCode == DELETE || keyCode == BACKSPACE) background(255);
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
  if (key == 'r' || key == 'R') stroke(255,0,0);
  if (key == 'g' || key == 'G') stroke(0,255,0);
  if (key == 'b' || key == 'B') stroke(0,0,255);
}
```
