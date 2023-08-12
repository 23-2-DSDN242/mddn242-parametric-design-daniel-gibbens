/* these are optional special variables which will change the system */
var systemBackgroundColor = "#caf0f8";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const darkBlue  = "#0077b6";
const lightBlue  = "#90e0ef";
const strokeColor  = "#03045e";


/* bounding box constants */
const boxWidth = 100;
const boxHeight = 200;

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // Bounding box constants
  // color/stroke setup
  //stroke(strokeColor);
  //strokeWeight(1);
  noStroke();

  fill(200, 120, 20, 180);
  rect(20, 100+20, 60,60,15);

  stroke(180, 100, 60);
  strokeWeight(3);
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

  line(x1,y1, x2,y2);
  line(x3,y3, x4,y4);
  line(x5,y5, x6,y6);
  if (letterData["circle"]) {
    drawRect(letterData["circleX"], letterData["circleY"]);
  }
  
}

function drawRect(x, y) {
  //left
  line(x,y, x,y+5+60+5);
  //bottom
  line(x+10,y+5+60+5, x+10+50,y+5+60+5);
  // right
  line(x+10+50+10,y+5+60+5, x+10+50+10,y);
  // top
  line(x+10+50,y, x+10,y);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};

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

  // Handle later to
  // circle lines appear from behind square, return behind square
  if (percent < 46) {
    new_letter["circle"] = oldObj["circle"];
  } else {
    new_letter["circle"] = newObj["circle"];
  }
  new_letter["circleX"] = map(percent, 0, 100, oldObj["circleX"], newObj["circleX"]);
  new_letter["circleY"] = map(percent, 0, 100, oldObj["circleY"], newObj["circleY"]);
  
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
