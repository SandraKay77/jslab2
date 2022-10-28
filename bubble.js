$(
    function Bubble(properties) {
      var mProperties = properties;

    this.new = function() {

    }
    

    this.show() {
        strokeWeight(2);
        stroke(250);
        ellipseMode(CENTER);
        ellipse(this.x, this.y, this.r * 2);
      }
    this.move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
      }
);
