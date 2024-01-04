/*
 *IAT 806 Spring 2023
 * Mewael Welearegay
 * A2-01 Program: Inspired by the logo of the messaging app - Telegram, creates a composition (color-'white') with six vertices using beginShape() and endShape().
 */
function setup() {
  createCanvas(400, 400)
}

function draw() {
  background(225)
  fill('#1D93D2')
  circle(212,190,220)
  fill(255)
  noStroke()
  beginShape()
vertex(130,180)
vertex(270,130)
vertex(250,250)
vertex(190,220)
vertex(240,160)
vertex(170,210)
  endShape(CLOSE)
}