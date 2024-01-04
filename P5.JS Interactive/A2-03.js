/*
 *IAT 806 Spring 2023
 * Mewael Welearegay
 * A2-03 Program: Using the same vertices from A2-02 (Tesla's logo inspired shape), creates a shape of a Stealth Fighter Jet with exactly the same 16 vertices that were used in A2-02. (This was a surprising discovery)
 */
function setup() {
  createCanvas(400, 400)
  background(255)
}

function draw() {
  fill('grey')
  stroke(0)
  strokeWeight(2)
  beginShape()
  vertex(70,90)
  vertex(130,100)
  vertex(120,60)
  vertex(170,60)
  vertex(200,90)
  vertex(230,60)
  vertex(280,60)
  vertex(270,100)
  vertex(330,90)
  vertex(290,110)
  vertex(290,130)
  vertex(230,160)
  vertex(200,310)
  vertex(170,160)
  vertex(110,130)
  vertex(110,110)
  endShape(CLOSE)
}