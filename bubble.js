function Bubble(properties) {
    var mProperties;

    this.newBubble = function(bubX, bubY, bubR) {
      this.x = bubX;
      this.y = bubY;
      this.r = bubR;
    
    }
    this.show = function() {
      strokeWeight(1);
      stroke(250);
      fill(150, 50);
      ellipseMode(CENTER);
      ellipse(this.x, this.y, this.r * 2);
    }
    this.move = function() {
      this.x = this.x + random(-5, 5);
      this.y = this.y + random(-5, 5);
    }
}