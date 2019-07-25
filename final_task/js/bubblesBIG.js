var Aquarium;
(function (Aquarium) {
    class BubbleBig extends Aquarium.AlleObjekte {
        constructor() {
            super();
        }
        draw() {
            let bubble = new Path2D();
            bubble.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            Aquarium.crc.strokeStyle = "#87cefa";
            Aquarium.crc.stroke(bubble);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.y += this.dy;
            if (this.y < 0)
                this.y = 600;
        }
    }
    Aquarium.BubbleBig = BubbleBig;
})(Aquarium || (Aquarium = {}));
//# sourceMappingURL=BubblesBIG.js.map