# Abstract shapes and patterns

## Basic shapes

In p5.js, the most basic shapes are `ellipse()`, `circle()`, `rect()` and `square()`. 
They can work with relatively few parameters and give us an opportunity to visualize quickly.

Let's begin by setting up a scene.

```js
function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
}
```

Now we will work in the draw function.

```js
function draw() {
	rect(width/2, height/2, 20);
}
```
There is one thing that is quite strange, if you try to change to width from 20 to `width`, you'll see that it draws from one of the corners. Go to [the docs](https://p5js.org/reference/#/p5/rectMode) and find out what you need to add.

<details>
  <summary>Answer</summary>
  
    rectMode(CENTER);

</details>


The rectangle has now a width of 20 pixels and is shown in the middle of the screen.
Lets make more then 1 rectangle, adjust the function to:

```js
function draw() {
	rectMode(CENTER);
	rect(width/2, height/2, 20);
	rect(width/2 + 20, height/2, 20);
	rect(width/2 - 20, height/2, 20);
}
```

Neat! But if we want a bunch of them it is easier to make a loop. The most straightforward way to do this is a for-loop. Is goes like this:

```js
for (let x = 0; x < 10 ; x++) {
	// code to be executed
}
```
This code will execute something 10 times (starting from 0, ending at 9).
Now adjust the draw function to: 
```js
function draw() {
    rectMode(CENTER);
    for (let x = 0; x < 10; x++) {
      rect(width / 2 + x * 20, height / 2, 20);
    }
  }
```

Now we can try to make a whole line of cubes in the center of the screen.
We have to change the parameters `0` and `10` so that it starts at 0 and ends at the end of the screen. Try to do it yourself first! 
(ps. you can also change the 'width / 2 + x * 20'-part to make it easier.)

<details>
  <summary>Answer</summary>

```js
	for (let x = 0; x < width; x++) {
		rect(x * 20, height / 2, 20);
	}
```
</details>

What do we see now?

The row starts with halve a square, that is not neat!
Lets delete the 'rectMode(CENTER)'-function.

There is another thing terribly wrong. We only see part of the rectangles that we have drawn.
To fix this we need to update the for-loop again. 

```js
for (let x = 0; x < width; x+=20) {
      rect(x, height / 2, 20);
}
```

We were drawing a rectangle for every pixel in the width of the screen. As the rectangle is 20-pixels wide, it is drawn beyond the canvas.
Now that is fixed we want to create a whole canvas.

Try to come up with a loop within a loop so we can also adjust the `y`-value. This is the function to draw the rectangle: `rect(x, y, 20);`

<details>
  <summary>Answer</summary>

```js
for (let x = 0; x < width; x += 20) {
	for (let y = 0; y < height; y += 20) {
		rect(x, y, 20);
	}
}
```
</details>

We have a grid!

![Grid](/grid.png)


### Exercise 

Try to give every cube a different color.

### Exercise 

Try to offset the cubes with a sine-wave in the y-direction.

![Sine wave grid](/sine-wave-grid.png)

### Experiment

Experiment a bit! 
e.g.
- change the color depending on the position
- change the figures (one is a circle, two a square)
- randomize the colors
- change the size


### Hard Exercise 

Try to rotate the cubes so that the rotation depends on the position.

Tip: use push() and pop(). 
You can also find help here: 
[Stackoverflow](https://stackoverflow.com/questions/65900807/how-do-i-rotate-a-rectangle-shape-from-a-specific-point-in-p5-js) or here: (YouTube tutorial)[https://www.youtube.com/watch?v=maTfm84mLbo]