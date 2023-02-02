# P5.js 

## Introduction

First of, what is P5? 

> p5.js is a JavaScript library for creative coding, with a focus on making coding accessible and inclusive for artists, designers, educators, beginners, and anyone else! p5.js is free and open-source because we believe software, and the tools to learn it, should be accessible to everyone. <br><br>
> Using the metaphor of a sketch, p5.js has a full set of drawing functionality. However, you’re not limited to your drawing canvas. You can think of your whole browser page as your sketch, including HTML5 objects for text, input, video, webcam, and sound.

from [p5.org](https://p5js.org/)

There are plenty of possibilities to start with P5 (or processing).
We can make use of the [processing IDE](), [the code editor for P5]() or import the library and setting up a site/server.

We will go for the last (and hardest) option, so we can easily expand this into future projects.

## Requirements

We will install Visual Studio Code as our Code editor. You can install and download it from [their website](https://code.visualstudio.com/Download).

Secondly we will install some plugins to make are life easier. 

### p5.vscode

- Open the Command Palette (with command-shift-p on Mac, or ctrl-shift-p on Windows) and then start typing and select Create p5.js Project.
- Select a new empty folder to put your project in.
- (optional) click the "Go Live" button in the bottom status bar to open your sketch in a browser

## Our first circle 

Make a new folder for this course and make another subfolder with the name of p5. 
Open this folder in VSCode, we can use one of the two methods.

### Method 1 

Mac: drag your folder to Visual Studio Code
Win: open the folder in your Command Line and type 'code .'

### Method 2

Open Visual Studio Code, go to file > Open Folder > select folder.

### Setting up the scene

So before we start we need a couple of things, luckely the plugin will arrange the files for us.
Press `ctrl+ shift + p` and select `create p5.js project`.

You'll see a couple files/folders being generated.

- libraries 
- index.html
- jsconfig.json
- sketch.js
- style.css

In the `libraries`-folder we can find the imported files. In this case `p5.min.js` and `p5.sound.min.js`.

index.html: our starting point.
jsconfig.js: Configuration settings for compiler.
sketch.js: our main JavaScript-file. 
style.css: our main style-file.

### Coming full circle

Open up the index.html and press `go live` in the ribbon on the bottom right of the screen.
A new page will open in your chosen browser, for me this is Firefox Developer Edition.
You see a grey rectangle in the corner of the screen. 
This is produced by the code in `sketch.js`.

We can adjust this code to our needs.
```js
function setup() { // this part get executed at the start
  createCanvas(400, 400); // this function creates a canvas with 400 width and 400 height

}

function draw() { // draw is called every frame
  background(220); // this is a grey background
}
```

If we want more information about certain topics or functions, there is some exquisite documentation at [the regerence site](https://p5js.org/reference/).

We will now add a ellipse to the scene, add `ellipse(50,50,80,80);` to the draw function. 

```js
function draw() {
  background(220);
  ellipse(50,50,80,80);
}
```

## Animating

That is one thing, let's make this randomized: `ellipse(random(0,101),50,80,80);`

Woah, kindoff hectic. Let's smooth this out, we use a lot of sine/cosine-functions for that. 

```js
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipse(sin(millis()*.001)*50+50,50,80,80);
}
```

## User input

Change the draw function to following code 

```js
function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
```

## And now?

Plenty of things to discover!

Head over to [the examples page](https://p5js.org/examples/) and find something that looks interesting.


