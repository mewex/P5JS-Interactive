/*
 *IAT 806 Spring 2023
 * Mewael Welearegay
 * A2-07 Program: Creates a dynamic animation of a fighter jet show using the cos() function as a generator for motion.
*/

let angle = 0
let Jetsize = 140
let Jetspeed = 0.03

function setup() {
  createCanvas(400, 400)
}

function draw() {
  background('#79D3FF')

  let x = width / 2 + cos(angle) * Jetsize
  let y = height / 2

  noStroke()
  fill(0)
  push()
  translate(x, y)
  rotate(angle/2)
  triangle(65,-60,5,15,-15,-5)
  triangle(45,-40,60,20,-12,-55)
  triangle(10,0,10,40,-10,20)
  triangle(-35,-12,7,-10,-17,10)
  fill('red')
  triangle(45,15,49,19,-5,65)
  triangle(-15,20,-68,68,-19,16)
  triangle(-62,5,-12,-42,-8,-39)
  pop()

  angle += Jetspeed
}
