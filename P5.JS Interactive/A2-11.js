/*
 *IAT 806 Spring 2023
 * Mewael Welearegay
 * A2-11 Program: Creates a responsive image (ellipse) that is in a random nonlinear motion when the mouse is moving but turns into a star that goes in motion with the mouse when the mouse is dragging..
*/

let x, y
let fillColor = [255, 255, 0]
let isDragging = false

function setup() {
  createCanvas(400, 400)
  x = width / 2
  y = height / 2
}

function draw() {
  background(0)
  if (isDragging) {
    x = mouseX
    y = mouseY
    fillColor = [255, 255, 0]
    drawStar(x, y, 30, 70, 5)
  } else {
    x += random(-5, 5)
    y += random(-5, 5)
    fillColor = [255, 255, 0]
    ellipse(x, y, 50, 50)
  }
  fill(fillColor)
}

function drawStar(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints
  let halfAngle = angle / 2.0
  beginShape()
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2
    let sy = y + sin(a) * radius2
    vertex(sx, sy)
    sx = x + cos(a + halfAngle) * radius1
    sy = y + sin(a + halfAngle) * radius1
    vertex(sx, sy)
  }
  endShape(CLOSE)
}

function mousePressed() {
  isDragging = true
}

function mouseReleased() {
  isDragging = false
}