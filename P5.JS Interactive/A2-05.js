/*
 *IAT 806 Spring 2023
 * Mewael Welearegay
 * A2-05 Program: Writes a function 'drawTriangles' for drawing triangles and creates a Christmas Tree to visually demonstrate the flexibility of the function by making it control the position, size, and color of the triangles.
*/

function drawTriangle(x, y, size, color) {
  fill(color)
  triangle(x, y, x + size, y, x + size / 2, y - size)
}
function setup() {
  createCanvas(400, 400)
}
function draw() {
  background(220)
    noStroke()
    drawTriangle(185, 290, 100, '#02AB36')
    drawTriangle(195, 240, 80, '#179B4F')
    drawTriangle(200, 200, 70, '#008037')
}
