function bird(color) {
  this.x = 50;
  this.y = height / 3;
  this.v = 0;
  this.a = 0;
  this.r = 15;
  this.img1 = loadImage('assets/redbird.png');
  this.img2 = loadImage('assets/bluebird.png');
  this.img3 = loadImage('assets/yellowbird.png');
  this.img = [this.img1, this.img2, this.img3];
  this.backgroundimg = loadImage('assets/background.png');
  this.baseimg = loadImage('assets/base.png');

  if (color == 'red') {
    this.colorChoice = 0;
  } else if (color == 'blue') {
    this.colorChoice = 1;
  } else if (color == 'yellow') {
    this.colorChoice = 2;
  } else {
    this.colorChoice = floor(random(3));
  }
  this.imguse = this.img[this.colorChoice];

  this.show = function () {
    fill(235, 236, 13);
    image(this.imguse, this.x, this.y);
  };

  this.up = function () {
    this.v -= 30 * this.a;
  };

  this.mobileUp = function () {
    this.v -= 38 * 0.7;
  };

  this.pass = function (other) {
    if (this.x - this.r > other.x + other.w) {
      return true;
    }
  };

  this.update = function () {
    if (this.y <= (6 * height) / 8) {
      this.y += this.v;
      this.v += this.a;
    } else if (this.y <= (6 * height) / 8) {
      this.v = 0;
    }
  };

  this.collide = function (o) {
    if (this.x + this.r / 2 > o.x && this.x - this.r / 2 < o.x + o.w) {
      if (this.y + this.r / 2 > o.y2 || this.y - this.r / 2 < o.y1) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };
}
