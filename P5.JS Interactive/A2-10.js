/*
 *IAT 806 Spring 2023
 * Mewael Welearegay
 * A2-10 Program: Creates an ellipse that appears when the mouse is pressed, and stays alive as long as the mouse is pressed but disappears when the mouse is released.
*/	
let isPressed = false
function setup() {
  createCanvas(400, 400)
}
function draw() {
  background(220)
  if (isPressed) {
    fill(255, 0, 0)
    ellipse(mouseX, mouseY, 50, 50)
  }
}
function mousePressed() {
  isPressed = true
}
function mouseReleased() {
  isPressed = false
}