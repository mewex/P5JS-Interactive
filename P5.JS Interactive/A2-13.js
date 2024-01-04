/*
 *IAT 806 Spring 2023
 * Mewael Welearegay
 * A2-13 Program: Programs the moving elements (green ellipse and red rectangle) from A2-09 using classes shown below to represent the ellipse and the rectangle.
*/

class ElliptoRect {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  move() {
    this.x += random(-5, 5)
    this.y += random(-5, 5)
  }
}

class Ellipse1 extends ElliptoRect {
  display() {
    ellipse(this.x, this.y, 50, 50)
  }
}

class Rect1 extends ElliptoRect {
  display() {
    rect(this.x, this.y, 50, 50)
  }
}

let ellipse1, rect1

function setup() {
  createCanvas(400, 400)
  ellipse1 = new Ellipse1(width / 2, height / 2)
  rect1 = new Rect1(width / 2, height / 2)
}

function draw() {
  background(220)
  fill('green')
  ellipse1.move()
  ellipse1.display()
  fill('red')
  rect1.move()
  rect1.display()
}