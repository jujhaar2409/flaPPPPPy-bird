var base = [];
var b;
var p = [];

function setup() {
    noStroke();
    createCanvas(400, 600);
    b = new bird();
    s = new score();
    base.push(new Base(0));
    base.push(new Base(width));
}

function draw() {
    image(b.backgroundimg, 0, 0, width, height);
    //image(b.baseimg, 0, 6 * height / 8, width, height / 4);

    if (frameCount % 70 == 0) {
        if (b.a != 0) {
            p.push(new pipe());
        }
    }

    for (var i = 0; i < p.length; i++) {
        //check whether out of frame

        if (p[i].outOfFrame()) {
            p.shift();
            s.increase()
        }

        p[i].update();
        p[i].show();
        //check collision

        if (b.collide(p[i]) || b.y >= 6 * height / 8) {
            noLoop();
        }
    }

    for (var j = 0; j < base.length; j++) {
        if (base[j].outOfFrame()) {
            base.push(new Base(width * 0.98))
            base.shift()
        }

        base[j].update();
        base[j].show();
    }

    b.update();
    b.show();

    s.show();
}

function keyPressed() {
    if (key == " ") {
        if (b.a == 0) {
            b.a = 0.7;
            b.v = 10;
            b.up();
        } else {
            b.up();
        }
    } else if (key == "z") {
        noStroke();
        createCanvas(400, 600);
        b = new bird();
        s = new score();
        p = [];
        base = []
        base.push(new Base(0));
        base.push(new Base(width));
        loop();
    }
}