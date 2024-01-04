/*
 *IAT 806 Spring 2023
 * Mewael Welearegay
 * A2-09 Program: Moves two visual elements (ellipse and rectangle) across the screen using the random() function as a generator of movement. Each element a unique nonlinear motion.
*/

let x1, y1, x2, y2

function setup() {
  createCanvas(400, 400)
  x1 = width / 2
  y1 = height / 2
  x2 = width / 2
  y2 = height / 2
}

function draw() {
  background(220)
fill('green')
  x1 += random(-5, 5)
  y1 += random(-2, 2)
  ellipse(x1, y1, 50, 50)

  fill('red')  
  x2 += random(-3, 3)
  y2 += random(-5, 5)
  rect(x2, y2, 50, 50)
}