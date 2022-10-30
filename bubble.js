function Bubble() {
  const canvas = document.getElementById("myCanvas");
  const c = canvas.getContext("2d");

  

  

  // this.newBubble = (x, y, r)
  // var x = mProperties.x
  // this.y = mProperties.y;
  // this.r = mProperties.r;

  this.show = function () {
    c.strokeWeight(1);
    c.stroke(250);
    c.fill(150, 50);
    c.ellipseMode(CENTER);
    c.ellipse(this.x, this.y, this.r * 2);
  }

  this.move = function () {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

}