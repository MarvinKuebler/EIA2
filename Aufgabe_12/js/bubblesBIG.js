var Aquarium;
(function (Aquarium) {
    class BubbleBig extends Aquarium.MovingObject {
        constructor() {
            super();
            this.dy = Math.random() * -3 - 1;
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
//# sourceMappingURL=bubblesBIG.js.map