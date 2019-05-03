//score
function score() {
  this.points = 0;
  this.x = 200;
  this.y = 100;

  this.increase = function() {
    this.points += 1;
  }

  this.show = function() {
    po = this.points.toString();
    textSize(40);
    textStyle(BOLD);
    textFont('Segoe UI black')
    stroke(0);
    strokeWeight(8);
    fill(255);
    text(po, this.x, this.y);
  }
}