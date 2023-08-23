const alphabet = {
  "default": {
    "x1": 50,
    "y1": 50,
    "x2": 50,
    "y2": 100,
    "x3": 50,
    "y3": 100,
    "x4": 50,
    "y4": 100,
    "x5": 50,
    "y5": 100,
    "x6": 50,
    "y6": 100,
    "rectLines": 0,
    "rectX": 15,
    "rectY": 115,
    "rectWidth": 60,
    "rectHeight": 60,
    "rectOffset": 5,
    "rectOrder": "Clockwise"
  },
  "A": {
    "x1": 95,
    "y1": 155,
    "x2": 95,
    "y2": 195,
    "x3": 95,
    "y3": 155,
    "x4": 95,
    "y4": 195,
    "x5": 95,
    "y5": 155,
    "x6": 95,
    "y6": 195,
    "rectLines": 4,
    "rectX": 15,
    "rectY": 115,
    "rectWidth": 60,
    "rectHeight": 60,
    "rectOffset": 5,
    "rectOrder": "Clockwise",
    "draw": () => drawRect(alphabet["A"].rectX, alphabet["A"].rectY, alphabet["A"].rectWidth, alphabet["A"].rectHeight,
                       alphabet["A"].rectOffset, alphabet["A"].rectLines, alphabet["A"].rectOrder)
  },
  "B": {
    "x1": 15,
    "y1": 45,
    "x2": 15,
    "y2": 105,
    "x3": 15,
    "y3": 45,
    "x4": 15,
    "y4": 105,
    "x5": 15,
    "y5": 45,
    "x6": 15,
    "y6": 105,
    "rectLines": 4,
    "rectX": 15,
    "rectY": 115,
    "rectWidth": 60,
    "rectHeight": 60,
    "rectOffset": 5,
    "rectOrder": "Clockwise",
    "draw": () => drawRect(alphabet["B"].rectX, alphabet["B"].rectY, alphabet["B"].rectWidth, alphabet["B"].rectHeight,
                           alphabet["B"].rectOffset, alphabet["B"].rectLines, alphabet["B"].rectOrder)
  },
  "C": {
    "x1": 15,
    "y1": 115,
    "x2": 15,
    "y2": 185,
    "x3": 25,
    "y3": 185,
    "x4": 85,
    "y4": 185,
    "x5": 85,
    "y5": 115,
    "x6": 25,
    "y6": 115,
    "rectLines": 0,
    "rectX": 15,
    "rectY": 115,
    "rectWidth": 60,
    "rectHeight": 60,
    "rectOffset": 5,
    "rectOrder": "Clockwise",
    "draw": () => drawRect(alphabet["C"].rectX, alphabet["C"].rectY, alphabet["C"].rectWidth, alphabet["C"].rectHeight,
                       alphabet["C"].rectOffset, alphabet["C"].rectLines, alphabet["C"].rectOrder)
  },
  "D": {
    "x1": 85,
    "y1": 45,
    "x2": 85,
    "y2": 105,
    "x3": 85,
    "y3": 45,
    "x4": 85,
    "y4": 105,
    "x5": 85,
    "y5": 45,
    "x6": 85,
    "y6": 105,
    "rectLines": 4,
    "rectX": 15,
    "rectY": 115,
    "rectWidth": 60,
    "rectHeight": 60,
    "rectOffset": 5,
    "rectOrder": "Clockwise",
    "draw": () => drawRect(alphabet["D"].rectX, alphabet["D"].rectY, alphabet["D"].rectWidth, alphabet["D"].rectHeight,
                       alphabet["D"].rectOffset, alphabet["D"].rectLines, alphabet["D"].rectOrder)
  },
  "E": {
    "x1": 15,
    "y1": 168,
    "x2": 15,
    "y2": 185,
    "x3": 25,
    "y3": 185,
    "x4": 75,
    "y4": 185,
    "x5": 15,
    "y5": 168,
    "x6": 15,
    "y6": 185,
    "rectLines": 4,
    "rectX": 15,
    "rectY": 115,
    "rectWidth": 60,
    "rectHeight": 35,
    "rectOffset": 5,
    "rectOrder": "Clockwise",
    "draw": () => drawRect(alphabet["E"].rectX, alphabet["E"].rectY, alphabet["E"].rectWidth, alphabet["E"].rectHeight,
                       alphabet["E"].rectOffset, alphabet["E"].rectLines, alphabet["E"].rectOrder)
  },
  "F": {
    "x1": 35,
    "y1": 95,
    "x2": 85,
    "y2": 95,
    "x3": 5,
    "y3": 95,
    "x4": 15,
    "y4": 95,
    "x5": 25,
    "y5": 105,
    "x6": 25,
    "y6": 185,
    "rectLines": 2,
    "rectX": 25,
    "rectY": 45,
    "rectWidth": 60,
    "rectHeight": 40,
    "rectOffset": 5,
    "rectOrder": "Clockwise",
    "draw": () => drawRect(alphabet["F"].rectX, alphabet["F"].rectY, alphabet["F"].rectWidth, alphabet["F"].rectHeight,
                       alphabet["F"].rectOffset, alphabet["F"].rectLines, alphabet["F"].rectOrder)
  },
  "G": {
    "x1": 25,
    "y1": 255,
    "x2": 75,
    "y2": 255,
    "x3": 85,
    "y3": 255,
    "x4": 85,
    "y4": 195,
    "x5": 25,
    "y5": 255,
    "x6": 75,
    "y6": 255,
    "rectLines": 4,
    "rectX": 15,
    "rectY": 115,
    "rectWidth": 60,
    "rectHeight": 60,
    "rectOffset": 5,
    "rectOrder": "Clockwise",
    "draw": () => drawRect(alphabet["G"].rectX, alphabet["G"].rectY, alphabet["G"].rectWidth, alphabet["G"].rectHeight,
                       alphabet["G"].rectOffset, alphabet["G"].rectLines, alphabet["G"].rectOrder)
  },
  "H": {
    "x1": 15,
    "y1": 105,
    "x2": 15,
    "y2": 45,
    "x3": 15,
    "y3": 105,
    "x4": 15,
    "y4": 45,
    "x5": 15,
    "y5": 105,
    "x6": 15,
    "y6": 45,
    "rectLines": 3,
    "rectX": 15,
    "rectY": 115,
    "rectWidth": 60,
    "rectHeight": 60,
    "rectOffset": 5,
    "rectOrder": "Clockwise",
    "draw": () => drawRect(alphabet["H"].rectX, alphabet["H"].rectY, alphabet["H"].rectWidth, alphabet["H"].rectHeight,
                       alphabet["H"].rectOffset, alphabet["H"].rectLines, alphabet["H"].rectOrder)
  },
  "I": {
    "x1": 50,
    "y1": 185,
    "x2": 50,
    "y2": 115,
    "x3": 50,
    "y3": 185,
    "x4": 50,
    "y4": 115,
    "x5": 50,
    "y5": 185,
    "x6": 50,
    "y6": 115,
    "rectLines": 4,
    "rectX": 35,
    "rectY": 75,
    "rectWidth": 20,
    "rectHeight": 20,
    "rectOffset": 5,
    "rectOrder": "Clockwise",
    "draw": () => drawRect(alphabet["I"].rectX, alphabet["I"].rectY, alphabet["I"].rectWidth, alphabet["I"].rectHeight,
                       alphabet["I"].rectOffset, alphabet["I"].rectLines, alphabet["I"].rectOrder)
  },
  "J": {
    "x1": 50,
    "y1": 185,
    "x2": 50,
    "y2": 115,
    "x3": 40,
    "y3": 185,
    "x4": 15,
    "y4": 185,
    "x5": 50,
    "y5": 185,
    "x6": 50,
    "y6": 115,
    "rectLines": 4,
    "rectX": 35,
    "rectY": 75,
    "rectWidth": 20,
    "rectHeight": 20,
    "rectOffset": 5,
    "rectOrder": "Clockwise",
    "draw": () => drawRect(alphabet["J"].rectX, alphabet["J"].rectY, alphabet["J"].rectWidth, alphabet["J"].rectHeight,
                       alphabet["J"].rectOffset, alphabet["J"].rectLines, alphabet["J"].rectOrder)
  },
  "K": {
    "x1": 15,
    "y1": 45,
    "x2": 15,
    "y2": 75,
    "x3": 15,
    "y3": 135,
    "x4": 15,
    "y4": 185,
    "x5": 25,
    "y5": 135,
    "x6": 65,
    "y6": 185,
    "rectLines": 4,
    "rectX": 15,
    "rectY": 85,
    "rectWidth": 30,
    "rectHeight": 30,
    "rectOffset": 5,
    "rectOrder": "Clockwise",
    "draw": () => drawRect(alphabet["K"].rectX, alphabet["K"].rectY, alphabet["K"].rectWidth, alphabet["K"].rectHeight,
                       alphabet["K"].rectOffset, alphabet["K"].rectLines, alphabet["K"].rectOrder)
  },
  "L": {
    "x1": 50,
    "y1": 45,
    "x2": 50,
    "y2": 185,
    "x3": 50,
    "y3": 45,
    "x4": 50,
    "y4": 185,
    "x5": 50,
    "y5": 45,
    "x6": 50,
    "y6": 185,
    "rectLines": 0,
    "rectX": 50,
    "rectY": 40,
    "rectWidth": 20,
    "rectHeight": 140,
    "rectOffset": 5,
    "rectOrder": "Clockwise",
    "draw": () => drawRect(alphabet["L"].rectX, alphabet["L"].rectY, alphabet["L"].rectWidth, alphabet["L"].rectHeight,
                       alphabet["L"].rectOffset, alphabet["L"].rectLines, alphabet["L"].rectOrder)
  },
  "M": {
    "x1": 25,
    "y1": 115,
    "x2": 75,
    "y2": 115,
    "x3": 85,
    "y3": 115,
    "x4": 85,
    "y4": 185,
    "x5": 50,
    "y5": 125,
    "x6": 50,
    "y6": 185,
    "rectLines": 1,
    "rectX": 15,
    "rectY": 115,
    "rectWidth": 60,
    "rectHeight": 60,
    "rectOffset": 5,
    "rectOrder": "Clockwise",
    "draw": () => drawRect(alphabet["M"].rectX, alphabet["M"].rectY, alphabet["M"].rectWidth, alphabet["M"].rectHeight,
                       alphabet["M"].rectOffset, alphabet["M"].rectLines, alphabet["M"].rectOrder)
  },
  "N": {
    "x1": 15,
    "y1": 115,
    "x2": 15,
    "y2": 185,
    "x3": 25,
    "y3": 115,
    "x4": 75,
    "y4": 115,
    "x5": 85,
    "y5": 115,
    "x6": 85,
    "y6": 185,
    "rectLines": 3,
    "rectX": 15,
    "rectY": 115,
    "rectWidth": 60,
    "rectHeight": 60,
    "rectOffset": 5,
    "rectOrder": "Clockwise",
    "draw": () => drawRect(alphabet["N"].rectX, alphabet["N"].rectY, alphabet["N"].rectWidth, alphabet["N"].rectHeight,
                       alphabet["N"].rectOffset, alphabet["N"].rectLines, alphabet["N"].rectOrder)
  },
  "O": {
    "x1": 15,
    "y1": 115,
    "x2": 15,
    "y2": 185,
    "x3": 25,
    "y3": 115,
    "x4": 75,
    "y4": 115,
    "x5": 85,
    "y5": 115,
    "x6": 85,
    "y6": 185,
    "rectLines": 4,
    "rectX": 15,
    "rectY": 115,
    "rectWidth": 60,
    "rectHeight": 60,
    "rectOffset": 5,
    "rectOrder": "Clockwise",
    "draw": () => drawRect(alphabet["O"].rectX, alphabet["O"].rectY, alphabet["O"].rectWidth, alphabet["O"].rectHeight,
                       alphabet["O"].rectOffset, alphabet["O"].rectLines, alphabet["O"].rectOrder)
  },
  "P": {
    "x1": 15,
    "y1": 195,
    "x2": 15,
    "y2": 255,
    "x3": 15,
    "y3": 115,
    "x4": 15,
    "y4": 185,
    "x5": 25,
    "y5": 115,
    "x6": 75,
    "y6": 115,
    "rectLines": 4,
    "rectX": 15,
    "rectY": 115,
    "rectWidth": 60,
    "rectHeight": 60,
    "rectOffset": 5,
    "rectOrder": "Clockwise",
    "draw": () => drawRect(alphabet["P"].rectX, alphabet["P"].rectY, alphabet["P"].rectWidth, alphabet["P"].rectHeight,
                       alphabet["P"].rectOffset, alphabet["P"].rectLines, alphabet["P"].rectOrder)
  },
  "Q": {
    "x1": 80,
    "y1": 190,
    "x2": 80,
    "y2": 255,
    "x3": 87,
    "y3": 255,
    "x4": 95,
    "y4": 255,
    "x5": 80,
    "y5": 115,
    "x6": 80,
    "y6": 180,
    "rectLines": 4,
    "rectX": 15,
    "rectY": 115,
    "rectWidth": 55,
    "rectHeight": 55,
    "rectOffset": 5,
    "rectOrder": "Clockwise",
    "draw": () => drawRect(alphabet["Q"].rectX, alphabet["Q"].rectY, alphabet["Q"].rectWidth, alphabet["Q"].rectHeight,
                       alphabet["Q"].rectOffset, alphabet["Q"].rectLines, alphabet["Q"].rectOrder)
  },
  "R": {
    "x1": 15,
    "y1": 115,
    "x2": 15,
    "y2": 185,
    "x3": 25,
    "y3": 115,
    "x4": 75,
    "y4": 115,
    "x5": 15,
    "y5": 115,
    "x6": 15,
    "y6": 185,
    "rectLines": 2,
    "rectX": 15,
    "rectY": 115,
    "rectWidth": 60,
    "rectHeight": 60,
    "rectOffset": 5,
    "rectOrder": "Clockwise",
    "draw": () => drawRect(alphabet["R"].rectX, alphabet["R"].rectY, alphabet["R"].rectWidth, alphabet["R"].rectHeight,
                       alphabet["R"].rectOffset, alphabet["R"].rectLines, alphabet["R"].rectOrder)
  },
  "S": {
    "x1": 25,
    "y1": 155,
    "x2": 75,
    "y2": 155,
    "x3": 85,
    "y3": 155,
    "x4": 85,
    "y4": 185,
    "x5": 75,
    "y5": 185,
    "x6": 25,
    "y6": 185,
    "rectLines": 2,
    "rectX": 15,
    "rectY": 115,
    "rectWidth": 60,
    "rectHeight": 30,
    "rectOffset": 5,
    "rectOrder": "Clockwise",
    "draw": () => drawRect(alphabet["S"].rectX, alphabet["S"].rectY, alphabet["S"].rectWidth, alphabet["S"].rectHeight,
                       alphabet["S"].rectOffset, alphabet["S"].rectLines, alphabet["S"].rectOrder)
  },
  "T": {
    "x1": 15,
    "y1": 95,
    "x2": 40,
    "y2": 95,
    "x3": 50,
    "y3": 45,
    "x4": 50,
    "y4": 85,
    "x5": 50,
    "y5": 95,
    "x6": 50,
    "y6": 185,
    "rectLines": 2,
    "rectX": 50,
    "rectY": 95,
    "rectWidth": 35,
    "rectHeight": 80,
    "rectOffset": 5,
    "rectOrder": "Clockwise",
    "draw": () => drawRect(alphabet["T"].rectX, alphabet["T"].rectY, alphabet["T"].rectWidth, alphabet["T"].rectHeight,
                       alphabet["T"].rectOffset, alphabet["T"].rectLines, alphabet["T"].rectOrder)
  },
  "U": {
    "x1": 25,
    "y1": 185,
    "x2": 75,
    "y2": 185,
    "x3": 85,
    "y3": 185,
    "x4": 85,
    "y4": 115,
    "x5": 15,
    "y5": 115,
    "x6": 15,
    "y6": 185,
    "rectLines": 1,
    "rectX": 15,
    "rectY": 115,
    "rectWidth": 60,
    "rectHeight": 60,
    "rectOffset": 5,
    "rectOrder": "Clockwise",
    "draw": () => drawRect(alphabet["U"].rectX, alphabet["U"].rectY, alphabet["U"].rectWidth, alphabet["U"].rectHeight,
                       alphabet["U"].rectOffset, alphabet["U"].rectLines, alphabet["U"].rectOrder)
  },
  "V": {
    "x1": 15,
    "y1": 115,
    "x2": 45,
    "y2": 185,
    "x3": 55,
    "y3": 185,
    "x4": 85,
    "y4": 115,
    "x5": 85,
    "y5": 115,
    "x6": 55,
    "y6": 185,
    "rectLines": 0,
    "rectX": 15,
    "rectY": 115,
    "rectWidth": 60,
    "rectHeight": 60,
    "rectOffset": 5,
    "rectOrder": "Clockwise",
    "draw": () => drawRect(alphabet["V"].rectX, alphabet["V"].rectY, alphabet["V"].rectWidth, alphabet["V"].rectHeight,
                       alphabet["V"].rectOffset, alphabet["V"].rectLines, alphabet["V"].rectOrder)
  },
  "W": {
    "x1": 25,
    "y1": 185,
    "x2": 75,
    "y2": 185,
    "x3": 85,
    "y3": 185,
    "x4": 85,
    "y4": 115,
    "x5": 50,
    "y5": 175,
    "x6": 50,
    "y6": 115,
    "rectLines": 1,
    "rectX": 15,
    "rectY": 115,
    "rectWidth": 60,
    "rectHeight": 60,
    "rectOffset": 5,
    "rectOrder": "Clockwise",
    "draw": () => drawRect(alphabet["W"].rectX, alphabet["W"].rectY, alphabet["W"].rectWidth, alphabet["W"].rectHeight,
                           alphabet["W"].rectOffset, alphabet["W"].rectLines, alphabet["W"].rectOrder)
  },
  "X": {
    "x1": 15,
    "y1": 115,
    "x2": 85,
    "y2": 185,
    "x3": 85,
    "y3": 115,
    "x4": 55,
    "y4": 145,
    "x5": 15,
    "y5": 185,
    "x6": 45,
    "y6": 155,
    "rectLines": 0,
    "rectX": 15,
    "rectY": 115,
    "rectWidth": 60,
    "rectHeight": 60,
    "rectOffset": 5,
    "rectOrder": "Clockwise",
    "draw": () => drawRect(alphabet["X"].rectX, alphabet["X"].rectY, alphabet["X"].rectWidth, alphabet["X"].rectHeight,
                           alphabet["X"].rectOffset, alphabet["X"].rectLines, alphabet["X"].rectOrder)  
  },
  "Y": {
    "x1": 85,
    "y1": 115,
    "x2": 15,
    "y2": 255,
    "x3": 15,
    "y3": 115,
    "x4": 45,
    "y4": 175,
    "x5": 85,
    "y5": 115,
    "x6": 15,
    "y6": 255,
    "rectLines": 0,
    "rectX": 15,
    "rectY": 115,
    "rectWidth": 60,
    "rectHeight": 60,
    "rectOffset": 5,
    "rectOrder": "Clockwise",
    "draw": () => drawRect(alphabet["Y"].rectX, alphabet["Y"].rectY, alphabet["Y"].rectWidth, alphabet["Y"].rectHeight,
                           alphabet["Y"].rectOffset, alphabet["Y"].rectLines, alphabet["Y"].rectOrder)
  },
  "Z": {
    "x1": 75,
    "y1": 115,
    "x2": 25,
    "y2": 115,
    "x3": 85,
    "y3": 115,
    "x4": 15,
    "y4": 185,
    "x5": 25,
    "y5": 185,
    "x6": 75,
    "y6": 185,
    "rectLines": 0,
    "rectX": 15,
    "rectY": 115,
    "rectWidth": 60,
    "rectHeight": 60,
    "rectOffset": 5,
    "rectOrder": "Clockwise",
    "draw": () => drawRect(alphabet["Z"].rectX, alphabet["Z"].rectY, alphabet["Z"].rectWidth, alphabet["Z"].rectHeight,
                           alphabet["Z"].rectOffset, alphabet["Z"].rectLines, alphabet["Z"].rectOrder)
  },
  "0": {
    "x1": 15,
    "y1": 45,
    "x2": 15,
    "y2": 185,
    "x3": 25,
    "y3": 45,
    "x4": 75,
    "y4": 45,
    "x5": 85,
    "y5": 45,
    "x6": 85,
    "y6": 185,
    "rectLines": 4,
    "rectX": 15,
    "rectY": 45,
    "rectWidth": 60,
    "rectHeight": 130,
    "rectOffset": 5,
    "rectOrder": "Clockwise",
    "draw": () => drawRect(alphabet["0"].rectX, alphabet["0"].rectY, alphabet["0"].rectWidth, alphabet["0"].rectHeight,
                           alphabet["0"].rectOffset, alphabet["0"].rectLines, alphabet["0"].rectOrder)
  },
  "1": {
    "x1": 15,
    "y1": 45,
    "x2": 45,
    "y2": 45,
    "x3": 55,
    "y3": 45,
    "x4": 55,
    "y4": 180,
    "x5": 15,
    "y5": 185,
    "x6": 85,
    "y6": 185,
    "rectLines": 0,
    "rectX": 15,
    "rectY": 45,
    "rectWidth": 30,
    "rectHeight": 130,
    "rectOffset": 5,
    "rectOrder": "Clockwise",
    "draw": () => drawRect(alphabet["1"].rectX, alphabet["1"].rectY, alphabet["1"].rectWidth, alphabet["1"].rectHeight,
                           alphabet["1"].rectOffset, alphabet["1"].rectLines, alphabet["1"].rectOrder)
  },
  "2": {
    "x1": 75,
    "y1": 45,
    "x2": 25,
    "y2": 45,
    "x3": 85,
    "y3": 45,
    "x4": 85,
    "y4": 115,
    "x5": 25,
    "y5": 185,
    "x6": 75,
    "y6": 185,
    "rectLines": 2,
    "rectX": 15,
    "rectY": 115,
    "rectWidth": 60,
    "rectHeight": 60,
    "rectOffset": 5,
    "rectOrder": "Clockwise",
    "draw": () => drawRect(alphabet["2"].rectX, alphabet["2"].rectY, alphabet["2"].rectWidth, alphabet["2"].rectHeight,
                           alphabet["2"].rectOffset, alphabet["2"].rectLines, alphabet["2"].rectOrder)
  },
  "3": {
    "x1": 25,
    "y1": 45,
    "x2": 75,
    "y2": 45,
    "x3": 85,
    "y3": 45,
    "x4": 85,
    "y4": 105,
    "x5": 85,
    "y5": 115,
    "x6": 85,
    "y6": 185,
    "rectLines": 3,
    "rectX": 15,
    "rectY": 115,
    "rectWidth": 60,
    "rectHeight": 60,
    "rectOffset": 5,
    "rectOrder": "CounterClockwise",
    "draw": () => drawRect(alphabet["3"].rectX, alphabet["3"].rectY, alphabet["3"].rectWidth, alphabet["3"].rectHeight,
                           alphabet["3"].rectOffset, alphabet["3"].rectLines, alphabet["3"].rectOrder)
  },
  "4": {
    "x1": 25,
    "y1": 115,
    "x2": 75,
    "y2": 115,
    "x3": 85,
    "y3": 45,
    "x4": 85,
    "y4": 115,
    "x5": 85,
    "y5": 125,
    "x6": 85,
    "y6": 185,
    "rectLines": 1,
    "rectX": 15,
    "rectY": 45,
    "rectWidth": 60,
    "rectHeight": 60,
    "rectOffset": 5,
    "rectOrder": "Clockwise",
    "draw": () => drawRect(alphabet["4"].rectX, alphabet["4"].rectY, alphabet["4"].rectWidth, alphabet["4"].rectHeight,
                           alphabet["4"].rectOffset, alphabet["4"].rectLines, alphabet["4"].rectOrder)
  },
  "5": {
    "x1": 25,
    "y1": 115,
    "x2": 75,
    "y2": 115,
    "x3": 85,
    "y3": 115,
    "x4": 85,
    "y4": 185,
    "x5": 75,
    "y5": 185,
    "x6": 25,
    "y6": 185,
    "rectLines": 2,
    "rectX": 15,
    "rectY": 45,
    "rectWidth": 60,
    "rectHeight": 60,
    "rectOffset": 5,
    "rectOrder": "Clockwise",
    "draw": () => drawRect(alphabet["5"].rectX, alphabet["5"].rectY, alphabet["5"].rectWidth, alphabet["5"].rectHeight,
                           alphabet["5"].rectOffset, alphabet["5"].rectLines, alphabet["5"].rectOrder)
  },
  "6": {
    "x1": 15,
    "y1": 45,
    "x2": 15,
    "y2": 105,
    "x3": 25,
    "y3": 45,
    "x4": 75,
    "y4": 45,
    "x5": 25,
    "y5": 115,
    "x6": 75,
    "y6": 115,
    "rectLines": 4,
    "rectX": 15,
    "rectY": 115,
    "rectWidth": 60,
    "rectHeight": 60,
    "rectOffset": 5,
    "rectOrder": "Clockwise",
    "draw": () => drawRect(alphabet["6"].rectX, alphabet["6"].rectY, alphabet["6"].rectWidth, alphabet["6"].rectHeight,
                           alphabet["6"].rectOffset, alphabet["6"].rectLines, alphabet["6"].rectOrder)
  },
  "7": {
    "x1": 25,
    "y1": 45,
    "x2": 75,
    "y2": 45,
    "x3": 85,
    "y3": 45,
    "x4": 85,
    "y4": 185,
    "x5": 25,
    "y5": 45,
    "x6": 75,
    "y6": 45,
    "rectLines": 0,
    "rectX": 15,
    "rectY": 45,
    "rectWidth": 60,
    "rectHeight": 130,
    "rectOffset": 5,
    "rectOrder": "Clockwise",
    "draw": () => drawRect(alphabet["7"].rectX, alphabet["7"].rectY, alphabet["7"].rectWidth, alphabet["7"].rectHeight,
                           alphabet["7"].rectOffset, alphabet["7"].rectLines, alphabet["7"].rectOrder)
  },
  "8": {
    "x1": 15,
    "y1": 45,
    "x2": 15,
    "y2": 105,
    "x3": 25,
    "y3": 45,
    "x4": 75,
    "y4": 45,
    "x5": 85,
    "y5": 45,
    "x6": 85,
    "y6": 105,
    "rectLines": 4,
    "rectX": 15,
    "rectY": 115,
    "rectWidth": 60,
    "rectHeight": 60,
    "rectOffset": 5,
    "rectOrder": "Clockwise",
    "draw": () => drawRect(alphabet["8"].rectX, alphabet["8"].rectY, alphabet["8"].rectWidth, alphabet["8"].rectHeight,
                           alphabet["B"].rectOffset, alphabet["B"].rectLines, alphabet["8"].rectOrder)
  },
  "9": {
    "x1": 25,
    "y1": 115,
    "x2": 75,
    "y2": 115,
    "x3": 85,
    "y3": 125,
    "x4": 85,
    "y4": 185,
    "x5": 75,
    "y5": 185,
    "x6": 25,
    "y6": 185,
    "rectLines": 3,
    "rectX": 15,
    "rectY": 45,
    "rectWidth": 60,
    "rectHeight": 60,
    "rectOffset": 5,
    "rectOrder": "Clockwise",
    "draw": () => drawRect(alphabet["9"].rectX, alphabet["9"].rectY, alphabet["9"].rectWidth, alphabet["9"].rectHeight,
                           alphabet["9"].rectOffset, alphabet["9"].rectLines, alphabet["9"].rectOrder)
  },
  "?": {
    "x1": 50,
    "y1": 115,
    "x2": 50,
    "y2": 145,
    "x3": 75,
    "y3": 115,
    "x4": 75,
    "y4": 45,
    "x5": 25,
    "y5": 45,
    "x6": 65,
    "y6": 45,
    "rectLines": 4,
    "rectX": 35,
    "rectY": 155,
    "rectWidth": 20,
    "rectHeight": 20,
    "rectOffset": 5,
    "rectOrder": "Clockwise",
    "draw": () => drawRect(alphabet["?"].rectX, alphabet["?"].rectY, alphabet["?"].rectWidth, alphabet["?"].rectHeight,
                           alphabet["?"].rectOffset, alphabet["?"].rectLines, alphabet["?"].rectOrder)
  }
}