function Base(x) {
    this.v = 4;
    this.x = x;
    this.y = 6 * height / 8;
    this.w = width * 2;
    this.h = height / 4;
    this.image = loadImage('assets/base.png');;
    //image(b.baseimg, 0, 6 * height / 8, width, height / 4);

    this.show = function() {
        image(this.image, this.x, this.y, this.w, this.h);
    }

    this.update = function() {
        this.x -= this.v;
    }

    this.outOfFrame = function() {
        if (this.x < -this.w) {
            return true;
        } else {
            return false;
        }
    }
}