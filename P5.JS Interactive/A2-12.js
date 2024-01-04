/*
 *IAT 806 Spring 2023
 * Mewael Welearegay
 * A2-12 Program: Creates a button "Change Color" that changes the color of the background to different random colors everytime it is clicked.
*/

let button
let backgroundColor = [255, 255, 255]

function setup() {
  createCanvas(400, 400)
  button = createButton("Change Color")
  button.position(140, 180)
  button.mousePressed(changeColor)
}

function draw() {
  background(backgroundColor)
}

function changeColor() {
  backgroundColor = [random(255), random(255), random(255)]
}