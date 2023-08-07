const canvasWidth = 960;
const canvasHeight = 500;

/*
 * my three variable per letter are:
 *
   size: radius of the second circle (in pixels)
   offsetx: x offset (in pixels) of the second circle
            relative to the first one
   offsety: y offset (in pixels) of the second circle
            relative to the first one
 *
 */

const letterA = {
  "ellipseSize" : 20,
  "rectWidth": 76,
  "rectHeight": 20,
  "rectXOffset": -38,
  "draw": (posx, posy) => {
    fill(triangleColor);
    triangle(posx, posy-80, posx-60, posy+60, posx+60, posy+60);
    fill(rectColor);
    rect(posx-38, posy-letterA["rectHeight"]/2, letterA["rectWidth"], letterA["rectHeight"]);
    fill(ellipseColor);
    ellipse(posx, posy, letterA["ellipseSize"]-5, letterA["ellipseSize"]);
  }
}

const letterB = {
  "ellipseSize" : 60,
  "rectWidth": 60,
  "rectHeight": 140,
  "rectXOffset": -60,
  "draw": (posx, posy) => {
    fill(ellipseColor);
    ellipse(posx+10, posy+30, letterB["ellipseSize"], letterB["ellipseSize"]);
    fill(triangleColor);
    triangle(posx-5, posy-80, posx+60, posy-40, posx-5, posy);
    fill(rectColor);
    rect(posx-60, posy-(letterB["rectHeight"] + 20)/2, letterB["rectWidth"], letterB["rectHeight"]);
  }
}

const letterC = {
  "ellipseSize" : 120,
  "rectWidth": 30,
  "rectHeight": 120,
  "rectXOffset": -38,
  "draw": (posx, posy) => {
    fill(ellipseColor);
    ellipse(posx, posy, letterC["ellipseSize"], letterC["ellipseSize"]);
    fill(triangleColor);
    triangle(posx-10, posy, posx+50, posy-45, posx+50, posy+45);
    fill(rectColor);
    rect(posx+40, posy-letterC["rectHeight"]/2, letterC["rectWidth"], letterC["rectHeight"]);
  }
}

const backgroundColor  = "#caf0f8";
const strokeColor      = "#03045e";

const triangleColor  = "#0080ff";
const rectColor  = "#9999ff";
const ellipseColor = "#7f00ff";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw () {
  // clear screen
  background(backgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  letterData["draw"](posx, posy);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
