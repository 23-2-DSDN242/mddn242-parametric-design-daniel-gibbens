## MDDN 242 2023 Assignment 2

For my alphabet design, each of my letters is created in lowercase using three lines and a custom rectangle function. The three lines are controlled by six x, y points using twelve parameters, while the rectangle function is controlled by six parameters. These parameters include the position (x, y), width, height, number of edges to draw, and the drawing order for those edges (either clockwise or counterclockwise). The rectangle function also draws a filled-in rectangle inside the edges. This rectangle is always drawn, but in most cases, it is used to fill an inner region of the letter, such as the inside of 'a' or 'p'. Additionally, each line/edge drawn features a shadow to the lower right. Finally, each letter is drawn over a fixed background of three rounded rectangles with an overlapping region.

By utilizing a combination of edges on the rectangle and three lines, my design is capable of recreating all the required letters and numbers.


The nineteen parameters per letter:
  * `x1` : the x coordinate of the first point of the first line
  * `y1` : the y coordinate of the first point of the first line
  * `x2` : the x coordinate of the second point of the first line
  * `y2` : the y coordinate of the second point of the first line
  * `x3` : the x coordinate of the third point of the second line
  * `y3` : the y coordinate of the third point of the second line
  * `x4` : the x coordinate of the fourth point of the second line
  * `y4` : the y coordinate of the fourth point of the second line
  * `x5` : the x coordinate of the fifth point of the third line
  * `y5` : the y coordinate of the fifth point of the third line
  * `x6` : the x coordinate of the sixth point of the third line
  * `y6` : the y coordinate of the sixth point of the third line
  * `rectLines` : the number of edges to draw around the filled rectangle
  * `rectX` : the x coordinate of the rectangle
  * `rectY` : the y coordinate of the rectangle
  * `rectWidth` : the width of the rectangle
  * `rectHeight` : the height of the rectangle
  * `clockwiseLines` : either 0 to draw counterclockwise or 1 to draw clockwise
  * `interpolatePercent` : the percentage of interpolation
