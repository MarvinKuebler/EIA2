var Aquarium;
(function (Aquarium) {
    class Futter extends Aquarium.MovingObject {
        constructor(x, y) {
            super();
            this.x = x;
            this.y = y;
            this.dy = Math.random() * 10 + 2;
        }
        draw() {
            let futter = new Path2D();
            futter.arc(this.x, this.y - 1, 5, 0, 360);
            Aquarium.crc.fillStyle = "yellow";
            Aquarium.crc.fill(futter);
            Aquarium.crc.stroke(futter);
        }
        move() {
            this.y += this.dy;
            if (this.y >= Aquarium.canvas.height - 10) {
                this.dy = 0;
            }
        }
    }
    Aquarium.Futter = Futter;
})(Aquarium || (Aquarium = {}));
//# sourceMappingURL=Futter.js.map