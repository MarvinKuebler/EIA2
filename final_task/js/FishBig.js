var Aquarium;
(function (Aquarium) {
    class FishBig extends Aquarium.AlleObjekte {
        constructor() {
            super();
            this.size = 15;
        }
        draw() {
            let body = new Path2D();
            body.ellipse(this.x, this.y, 20, 45, 1.5, 0, 2 * Math.PI);
            Aquarium.crc.fillStyle = "#6EF5DE";
            Aquarium.crc.fill(body);
            Aquarium.crc.strokeStyle = "#11322B";
            Aquarium.crc.stroke(body);
            let tail = new Path2D();
            tail.moveTo(this.x - 40, this.y + 4);
            tail.lineTo(this.x - 60, this.y + 25);
            tail.lineTo(this.x - 60, this.y - 15);
            Aquarium.crc.fillStyle = "#092732";
            Aquarium.crc.fill(tail);
            Aquarium.crc.strokeStyle = "#11322B";
            Aquarium.crc.stroke(tail);
            let pupill = new Path2D();
            pupill.arc(this.x + 20, this.y - 2, 5, 0, 2 * Math.PI);
            Aquarium.crc.fillStyle = "#000000";
            Aquarium.crc.fill(pupill);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += this.dx;
            if (this.x + 30 > 900) {
                this.x = 0;
            }
        }
    }
    Aquarium.FishBig = FishBig;
})(Aquarium || (Aquarium = {}));
//# sourceMappingURL=FishBig.js.map