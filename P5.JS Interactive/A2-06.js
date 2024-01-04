/*
 *IAT 806 Spring 2023
 * Mewael Welearegay
 * A2-06 Program: Writes a function that allows me to create ellipses with multiple parameters (position, size, color, rotation...) and creates a chat 'typing...' bubble to visually demonstrate the flexibility of the function in controlling the parameters. 
*/

function drawEllipse(x, y, width, height, rotation, color) {
  push()
  fill(color)
  translate(x, y)
  rotate(rotation)
  ellipse(0, 0, width, height)
  pop()
}

function setup() {
  createCanvas(400, 400)
}

function draw() {
  background(0)
  noStroke()
  drawEllipse(200, 150, 200, 150, 0, 255)
  drawEllipse(140, 190, 70, 85, 45, 255)
  drawEllipse(80, 240, 42, 40, 20, 255)
  drawEllipse(150, 150, 40, 35, 90, 190)
  drawEllipse(200, 150, 40, 35, 90, 220)
  drawEllipse(250, 150, 40, 35, 90, 150)
}