/*
 * IAT 806 Spring 2023
 * Mewael Welearegay
 * A2-04 Program: With the intention of visually demonstrating a beautiful flower, named "Adey-Abeba" (scientific name - Bidens Macroptera), which is found ONLY in my country - Ethiopia, writes a function called 'AdeyAbebaSize' with a single parameter 'size', setting the size of the flower. Also uses translate, push/pop, for loop and rotate functions to visually demonstrate the "Adey-Abeba" flower.
*/
function setup() {
  createCanvas(400, 400)
}

function draw() {  
  background(0)
  AdeyAbebaSize(100)
}
function AdeyAbebaSize(size) {
  fill('yellow')
  push()
  translate(width/2 , height /2)
  for (let i = 0; i < 360; i += 37) {
    push()
    rotate(i)
    translate(0, -size)
    ellipse(0, 0, size/2, size*1.6)
    pop()
    circle(0,0,size/1.6)
  }
}