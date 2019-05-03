function bird() {
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
    this.rand = floor(random(3));
    this.imguse = this.img[this.rand];

    this.show = function() {
        fill(235, 236, 13);
        image(this.imguse, this.x, this.y);
    };

    this.up = function() {
        this.v -= 30 * this.a;
    };

    this.pass = function(other) {
        if (this.x - this.r > other.x + other.w) {
            return true;
        }
    }

    this.update = function() {
        if (this.y <= 6 * height / 8) {
            this.y += this.v;
            this.v += this.a;
        } else if (this.y <= 6 * height / 8) {
            this.v = 0;
        }
    }

    this.collide = function(other) {
        if ((this.x + this.r / 2 > other.x) && (this.x - this.r / 2 < other.x + other.w)) {
            if ((this.y + this.r / 2 > other.y2) || (this.y - this.r / 2 < other.y1)) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}