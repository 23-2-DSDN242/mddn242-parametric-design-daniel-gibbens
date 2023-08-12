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
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
