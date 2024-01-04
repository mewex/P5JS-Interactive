/*
 *IAT 806 Spring 2023
 * Mewael Welearegay
 * A2-14 Program: Makes two modifications to the "Particle" class found in the particle.js example. First modification; gives each particle a unique random color that stays constant throughout the particle's lifetime. Second modification; makes the particle change its shape from ellipse to rectangle and vice versa everytime the particle hits any edge.
*/

class Particle {
  xPos = 0
  yPos = 0
  xVel = 0
  yVel = 0
  oSize = 32
  isEllipse = true
  color
  countDown
  constructor(xPos, yPos, xVel, yVel) {
    this.xPos = xPos
    this.yPos = yPos
    this.xVel = xVel
    this.yVel = yVel
    this.countDown = -1;
    this.color = color(random(255), random(255), random(255))
  }
  drawMe() {
    stroke(0, 128)
    strokeWeight(2)
    fill(this.color)
    push()
    translate(this.xPos, this.yPos)
    if (this.countDown >= 0) {
      scale(this.countDown / 30)
      if (this.isEllipse) {
        ellipse(0, 0, this.oSize, this.oSize)
      } else {
        rectMode(CENTER);
        rect(0, 0, this.oSize, this.oSize)
      }
    } else {
      if (this.isEllipse) {
        ellipse(0, 0, this.oSize, this.oSize)
      } else {
        rectMode(CENTER)
        rect(0, 0, this.oSize, this.oSize)
      }
    }
    pop()
  }
  update() {
    this.xPos += this.xVel
    this.yPos += this.yVel
    if (this.xPos - this.oSize / 2 < 0 || this.xPos + this.oSize / 2 > width) {
      this.xVel = -this.xVel
      this.isEllipse = !this.isEllipse
    }
    if (this.yPos - this.oSize / 2 < 0 || this.yPos + this.oSize / 2 > height) {
      this.yVel = -this.yVel
      this.isEllipse = !this.isEllipse
    }
    this.countDown--
  }
  detectHit(x, y) {
    var hit = false
    if (x > this.xPos - this.oSize / 2 && x < this.xPos + this.oSize / 2 && y > this.yPos - this.oSize / 2 && y < this.yPos + this.oSize / 2) {
      hit = true
    }
    return hit
  }
  dead() {
    this.countDown = 30
    this.xVel = 0
    this.yVel = 0
  }
}

class Score {
    score = 0
    constructor() {
        this.score = 0
    }
    update (increment){
        this.score += increment
    }

    drawScore() {
        noStroke()
        fill( 0, 255, 255 )
        text ("Score: " + this.score, width-100, 50)
    }
}
var particles = []
var count = 20
var gameScore = new Score()
var respawnTimer = 0
var minimalParticles = 10
function preload() {
}

function setup() {
    createCanvas(600, 400)
    for (var i = 0; i < count; i++) {
        var newParticle = new Particle(random(16, width - 16),random(16, height - 16), random(-4, 4), random(-4, 4))
        particles.push(newParticle)
    }
}

function draw() {
    background(255)
    respawn()
    for (var i = 0; i < particles.length; i++) {
        var curParticle = particles[i]
        if (mouseIsPressed && curParticle.detectHit(mouseX, mouseY) && curParticle.countDown < 0) {
            curParticle.dead()
        }
        if (curParticle.countDown == 0) { 
            particles.splice(i,1)
            count--
            gameScore.update(5)
            continue
        }     
        curParticle.update()
        curParticle.drawMe()
    }
    noStroke()
    fill( 255, 0, 255 )
    text ("Count: " + count, 30, 50)
    gameScore.drawScore()
}

function respawn() {
    respawnTimer++
    if (respawnTimer == 60) {
        respawnTimer = 0
        if (particles.length < minimalParticles) {
            particles.push(new Particle(
                random(16, width - 16),
                random(16, height - 16),
                random(-4, 4), random(-4, 4)))
            count++
        }
    }
}
