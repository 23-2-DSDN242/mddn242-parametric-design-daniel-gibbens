// System constants
var systemBackgroundColor = "#191128";
var systemLineColor = "#264653";
var systemBoxColor = "#00c800";

// Color constants
var backgroundRectColor = "#26132E";
var rectColor  = "#8E00E0";
var strokeColor  = "#D7EDFF";
var shadow = "#C528C8";

// Gap between lines and filled rectangle
const rectOffset = 5;

// Toggle for neon
var neon = 1;

// Toggle for innerLine
var inLineWeight = 1;

// Sets a new colour theme
function setTheme(newSystemBackgroundColor, newBackgroundRectColor, newStrokeColor, newShadow, newRectColor, newNeon, newInLineWeight) {
  systemBackgroundColor = newSystemBackgroundColor;
  backgroundRectColor = newBackgroundRectColor;
  strokeColor = newStrokeColor;
  shadow = newShadow;
  rectColor = newRectColor;
  neon = newNeon;
  inLineWeight = newInLineWeight;
}

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // Get letterData
  var x1 = letterData["x1"];
  var y1 = letterData["y1"];
  var x2 = letterData["x2"];
  var y2 = letterData["y2"];
  var x3 = letterData["x3"];
  var y3 = letterData["y3"];
  var x4 = letterData["x4"];
  var y4 = letterData["y4"];
  var x5 = letterData["x5"];
  var y5 = letterData["y5"];
  var x6 = letterData["x6"];
  var y6 = letterData["y6"];
  var rectX = letterData["rectX"];
  var rectY = letterData["rectY"];
  var rectWidth = letterData["rectWidth"];
  var rectHeight = letterData["rectHeight"];
  var lineCount = letterData["rectLines"];
  var clockwiseLines = letterData["clockwiseLines"];
  var percent = letterData["interpolatePercent"];

  removeNeon();

  // Draw the letter background rectangles
  noStroke();
  fill(backgroundRectColor);
  rect(0, 35, 100,60, 12);
  rect(0, 85, 100,60, 14);
  rect(0, 135, 100,60, 17);

  // Draw the filled in rectangle
  fill(rectColor);
  rect(rectX + rectOffset, rectY + rectOffset, rectWidth,rectHeight,15);

  addNeon();

  // Draw non-rectangle line shadows
  stroke(shadow);
  strokeWeight(8);
  
  line(x1+1,y1+1, x2+1,y2+1);
  line(x3+1,y3+1, x4+1,y4+1);
  line(x5+1,y5+1, x6+1,y6+1);

  // Draw non-rectangle lines
  stroke(strokeColor);
  strokeWeight(6);
  
  line(x1,y1, x2,y2);
  line(x3,y3, x4,y4);
  line(x5,y5, x6,y6);

  // Draw inner lines
  stroke('FFFFFF');
  strokeWeight(inLineWeight);

  line(x1,y1, x2,y2);
  line(x3,y3, x4,y4);
  line(x5,y5, x6,y6);

  // Call the letters rectangle method
  if (lineCount > 0) {
    if (percent != 0) {
      interpolateRect(rectX, rectY, rectWidth, rectHeight, lineCount, clockwiseLines, percent);
    } else {
      drawRect(rectX, rectY, rectWidth, rectHeight, lineCount, clockwiseLines);
    }
  }
}

// Helper function for adding neon effect
function addNeon() {
  drawingContext.shadowBlur = 42 * neon;
  drawingContext.shadowColor = shadow
}

// Helper function for removing neon effect
function removeNeon() {
  drawingContext.shadowBlur = 0
  drawingContext.shadowColor = color(0,0,0,0);
}

// Helper function for selecting correct rotation
function drawRect(x, y, rectWidth, rectHeight, lineCount, clockwiseLines) {
  if (clockwiseLines === 1) {
    drawLinesClockwise(x, y, rectWidth, rectHeight, lineCount);
  } else {
    drawLinesCounterClockwise(x, y, rectWidth, rectHeight, lineCount);
  }
}

// Draws the lines around the rectangle in a clockwise fashion
function drawLinesClockwise(x, y, rectWidth, rectHeight, lineCount) {
  // Draw shadow lines
  stroke(shadow);
  strokeWeight(8);

  // Left
  line(x+1, y+1, x+1, y + rectOffset * 2 + rectHeight+1);
  // Top
  if (lineCount > 1) line(x + rectWidth+1, y+1, x + rectOffset * 2+1, y+1);
  // Right
  if (lineCount > 2) line(x + rectOffset * 2 + rectWidth+1, y + rectOffset * 2 + rectHeight+1, x + rectOffset * 2 + rectWidth+1, y+1);
  // Bottom
  if (lineCount > 3) line(x + rectOffset * 2+1, y + rectOffset * 2 + rectHeight+1, x + rectWidth+1, y + rectOffset * 2 + rectHeight+1);

  // Draw lines
  stroke(strokeColor);
  strokeWeight(6);

  // Left
  line(x, y, x, y + rectOffset * 2 + rectHeight);
  // Top
  if (lineCount > 1) line(x + rectWidth, y, x + rectOffset * 2, y);
  // Right
  if (lineCount > 2) line(x + rectOffset * 2 + rectWidth, y + rectOffset * 2 + rectHeight, x + rectOffset * 2 + rectWidth, y);
  // Bottom
  if (lineCount > 3) line(x + rectOffset * 2, y + rectOffset * 2 + rectHeight, x + rectWidth, y + rectOffset * 2 + rectHeight);

  // Draw inner lines
  stroke('FFFFFF');
  strokeWeight(inLineWeight);

  // Left
  line(x, y, x, y + rectOffset * 2 + rectHeight);
  // Top
  if (lineCount > 1) line(x + rectWidth, y, x + rectOffset * 2, y);
  // Right
  if (lineCount > 2) line(x + rectOffset * 2 + rectWidth, y + rectOffset * 2 + rectHeight, x + rectOffset * 2 + rectWidth, y);
  // Bottom
  if (lineCount > 3) line(x + rectOffset * 2, y + rectOffset * 2 + rectHeight, x + rectWidth, y + rectOffset * 2 + rectHeight);
}

// Draws the lines around the rectangle in a counterclockwise fashion
function drawLinesCounterClockwise(x, y, rectWidth, rectHeight, lineCount) {
  // Draw shadow lines
  stroke(shadow);
  strokeWeight(8);

  
  // Bottom
  line(x + rectOffset * 2 + 1, y + rectOffset * 2 + rectHeight + 1, x + rectWidth + 1, y + rectOffset * 2 + rectHeight + 1);
  // Right
  if (lineCount > 1) line(x + rectOffset * 2 + rectWidth + 1, y + rectOffset * 2 + rectHeight + 1, x + rectOffset * 2 + rectWidth + 1, y + 1);
  // Top
  if (lineCount > 2) line(x + rectWidth + 1, y + 1, x + rectOffset * 2 + 1, y + 1);
  // Left
  if (lineCount > 3) line(x + 1, y + 1, x + 1, y + rectOffset * 2 + rectHeight + 1);

  // Draw lines
  stroke(strokeColor);
  strokeWeight(6);

  
  // Bottom
  line(x + rectOffset * 2, y + rectOffset * 2 + rectHeight, x + rectWidth, y + rectOffset * 2 + rectHeight);
  // Right
  if (lineCount > 1) line(x + rectOffset * 2 + rectWidth, y + rectOffset * 2 + rectHeight, x + rectOffset * 2 + rectWidth, y);
  // Top
  if (lineCount > 2) line(x + rectWidth, y, x + rectOffset * 2, y);
  // Left
  if (lineCount > 3) line(x, y, x, y + rectOffset * 2 + rectHeight);

  // Draw inner lines
  stroke('FFFFFF');
  strokeWeight(inLineWeight);

  // Bottom
  line(x + rectOffset * 2, y + rectOffset * 2 + rectHeight, x + rectWidth, y + rectOffset * 2 + rectHeight);
  // Right
  if (lineCount > 1) line(x + rectOffset * 2 + rectWidth, y + rectOffset * 2 + rectHeight, x + rectOffset * 2 + rectWidth, y);
  // Top
  if (lineCount > 2) line(x + rectWidth, y, x + rectOffset * 2, y);
  // Left
  if (lineCount > 3) line(x, y, x, y + rectOffset * 2 + rectHeight);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};

  // Line coords
  new_letter["x1"] = map(percent, 0, 100, oldObj["x1"], newObj["x1"]);
  new_letter["y1"] = map(percent, 0, 100, oldObj["y1"], newObj["y1"]);
  new_letter["x2"] = map(percent, 0, 100, oldObj["x2"], newObj["x2"]);
  new_letter["y2"] = map(percent, 0, 100, oldObj["y2"], newObj["y2"]);
  new_letter["x3"] = map(percent, 0, 100, oldObj["x3"], newObj["x3"]);
  new_letter["y3"] = map(percent, 0, 100, oldObj["y3"], newObj["y3"]);
  new_letter["x4"] = map(percent, 0, 100, oldObj["x4"], newObj["x4"]);
  new_letter["y4"] = map(percent, 0, 100, oldObj["y4"], newObj["y4"]);
  new_letter["x5"] = map(percent, 0, 100, oldObj["x5"], newObj["x5"]);
  new_letter["y5"] = map(percent, 0, 100, oldObj["y5"], newObj["y5"]);
  new_letter["x6"] = map(percent, 0, 100, oldObj["x6"], newObj["x6"]);
  new_letter["y6"] = map(percent, 0, 100, oldObj["y6"], newObj["y6"]);

  // Rectangle data
  new_letter["rectX"] = map(percent, 0, 100, oldObj["rectX"], newObj["rectX"]);
  new_letter["rectY"] = map(percent, 0, 100, oldObj["rectY"], newObj["rectY"]);
  new_letter["rectWidth"] = map(percent, 0, 100, oldObj["rectWidth"], newObj["rectWidth"]);
  new_letter["rectHeight"] = map(percent, 0, 100, oldObj["rectHeight"], newObj["rectHeight"]);

  // Enable smooth transition of different line count and rotation by changing when rectangle lines are not displayed
  if (percent < 50) {
    new_letter["rectLines"] = oldObj["rectLines"];
    new_letter["clockwiseLines"] = oldObj["clockwiseLines"];
  } else {
    new_letter["rectLines"] = newObj["rectLines"];
    new_letter["clockwiseLines"] = newObj["clockwiseLines"];
  }
  
  // Save the percent value for drawing the rectangle when interpolating
  if (percent != 0 || percent != 100) {
    new_letter["interpolatePercent"] = percent;
  }

  return new_letter;
}

// Helper function for mapping rectangle lines to centre of rect and back out again
function interpolateRect(x, y, rectWidth, rectHeight, lineCount, clockwiseLines, percent) {
  if (percent < 50) {
    // Move lines towards the centre of the rectangle
    x = map(percent, 0, 50, x, x + rectOffset + rectWidth/2);
    y = map(percent, 0, 50, y, y + rectOffset + rectHeight/2);
    rectWidth = map(percent, 0, 50, rectWidth, 0);
    rectHeight = map(percent, 0, 50, rectHeight, 0);
    drawRect(x, y, rectWidth, rectHeight, lineCount, clockwiseLines);
  } else {
    // Move lines away from the centre of the rectangle
    x = map(percent, 50, 100, x + rectOffset + rectWidth/2, x);
    y = map(percent, 50, 100, y + rectOffset + rectHeight/2, y);
    rectWidth = map(percent, 50, 100, 0, rectWidth);
    rectHeight = map(percent, 50, 100, 0, rectHeight);
    drawRect(x, y, rectWidth, rectHeight, lineCount, clockwiseLines);
  }
  
}

var swapWords = [
  "SYNTHBOX",
  "DAYDREAM",
  "TWILIGHT",
  "SPECTRUM"
]
