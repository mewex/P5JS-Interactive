/*
 *IAT 806 Spring 2023
 * Mewael Welearegay
 * A2-02 Program: Inspired by the logo of my the EV brand - Tesla, creates a composition with 16 vertices using beginShape() and endShape().
 */
function setup() {
  createCanvas(400, 400)
  background(255)
}

function draw() {
  fill('red')
  stroke(0)
  strokeWeight(2)
  beginShape()
  vertex(70,90)
  vertex(120,60)
  vertex(170,60)
  vertex(200,90)
  vertex(230,60)
  vertex(280,60)
  vertex(330,90)
  vertex(290,130)
  vertex(290,110)
  vertex(270,100)
  vertex(230,160)
  vertex(200,310)
  vertex(170,160)
  vertex(130,100)
  vertex(110,110)
  vertex(110,130)
  endShape(CLOSE)
}