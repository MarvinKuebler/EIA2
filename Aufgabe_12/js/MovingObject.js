var Aquarium;
(function (Aquarium) {
    class MovingObject {
        constructor() {
            this.x = Math.random() * Aquarium.crc.canvas.width;
            this.y = Math.random() * Aquarium.crc.canvas.height;
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x < 20)
                this.x = Aquarium.canvas.width + 100;
        }
        draw() { }
    }
    Aquarium.MovingObject = MovingObject;
})(Aquarium || (Aquarium = {}));
//# sourceMappingURL=MovingObject.js.map