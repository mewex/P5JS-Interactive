/*
 *IAT 806 Spring 2023
 * Mewael Welearegay
 * A2-08 Program: Creates a dynamic animation of a real life fan spinning in a slow motion by using the cos() and sin() function as a generator for the motion of the fan.
*/
let angle = 0
let dotPositions = []

function setup() {
  createCanvas(400, 400)
  for (let i = 0; i < 5; i++) {
    dotPositions.push({
      x: width/2 + cos(angle + i*TWO_PI/5)*100,
      y: height/2 + sin(angle + i*TWO_PI/5)*100
    })
  }
}

function draw() {
  background('#E4AF00')
  angle += 0.05
 
  for (let i = 0; i < 5; i++) {
    dotPositions[i].x = width/2 + cos(angle + i*TWO_PI/5)*100
    dotPositions[i].y = height/2 + sin(angle + i*TWO_PI/5)*100
  }
  
  for (let i = 0; i < 5; i++) {
    push()
    translate(dotPositions[i].x, dotPositions[i].y)
    rotate(angle + i*TWO_PI/5)
    fill(240)
    ellipse(0, 0, 140, 90)
    pop()
    fill(200)
    circle(200,200,85)
  }
}