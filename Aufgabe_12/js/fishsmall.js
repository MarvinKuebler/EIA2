var Aquarium;
(function (Aquarium) {
    class Fishsmall {
        draw() {
            let body = new Path2D();
            body.ellipse(this.x, this.y, 30, 50, 1.5, 0, 2 * Math.PI);
            Aquarium.crc.fillStyle = "#A360E2";
            Aquarium.crc.fill(body);
            Aquarium.crc.strokeStyle = "#11322B";
            Aquarium.crc.stroke(body);
            let tail = new Path2D();
            tail.moveTo(this.x - 50, this.y + 4);
            tail.lineTo(this.x - 70, this.y + 25);
            tail.lineTo(this.x - 70, this.y - 15);
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
    Aquarium.Fishsmall = Fishsmall;
})(Aquarium || (Aquarium = {}));
//# sourceMappingURL=fishsmall.js.map