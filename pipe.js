function pipe() {
	this.x = width;
	this.y1 = random(height / 16, (7 * height) / 16);
	this.y2 = this.y1 + height * 0.25;
	this.h2 = (6 * height) / 8 - this.y2;
	this.w = width / 20;
	this.v = 4;
	this.img2 = loadImage("assets/pipe-green2.png");
	this.img1 = loadImage("assets/pipe-green1.png");

	this.show = function() {
		image(this.img2, this.x, 0, this.w, this.y1);
		image(this.img1, this.x, this.y2, this.w, this.h2);
	};

	this.outOfFrame = function() {
		if (this.x < -this.w) {
			return true;
		} else {
			return false;
		}
	};

	this.update = function() {
		this.x -= this.v;
	};
}
