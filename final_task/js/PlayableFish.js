var Aquarium;
(function (Aquarium) {
    class PlayableFish {
        constructor() {
            this.size = 10;
            this.direction = ("rechts");
            this.x = Aquarium.canvas.width / 2;
            this.y = Aquarium.canvas.height / 2;
            this.dx = 0;
            this.dy = 0;
        }
        draw() {
            if (this.direction == "rechts") {
                let body = new Path2D();
                body.ellipse(this.x, this.y, (this.size * 20) / 10, 55, 1.5, 0, 2 * Math.PI);
                Aquarium.crc.fillStyle = "#FF0000";
                Aquarium.crc.fill(body);
                Aquarium.crc.strokeStyle = "#11322B";
                Aquarium.crc.stroke(body);
                let tail = new Path2D();
                tail.moveTo(this.x - (15 * this.size) / 10, this.y + (4 * this.size) / 10);
                tail.lineTo(this.x - (50 * this.size) / 10, this.y + (25 * this.size) / 10);
                tail.lineTo(this.x - (50 * this.size) / 10, this.y - (15 * this.size) / 10);
                Aquarium.crc.fillStyle = "#092732";
                Aquarium.crc.fill(tail);
                Aquarium.crc.strokeStyle = "#11322B";
                Aquarium.crc.stroke(tail);
                let pupill = new Path2D();
                pupill.arc(this.x + 20, this.y - 2, 5, 0, 2 * Math.PI);
                Aquarium.crc.fillStyle = "#000000";
                Aquarium.crc.fill(pupill);
            }
            else {
                let body = new Path2D();
                body.ellipse(this.x, this.y, (this.size * 20) / 10, 55, 1.5, 0, 2 * Math.PI);
                Aquarium.crc.fillStyle = "#FF0000";
                Aquarium.crc.fill(body);
                Aquarium.crc.strokeStyle = "#11322B";
                Aquarium.crc.stroke(body);
                let tail = new Path2D();
                tail.moveTo(this.x + (30 * this.size) / 10, this.y + (4 * this.size) / 10);
                tail.lineTo(this.x + (50 * this.size) / 10, this.y + (25 * this.size) / 10);
                tail.lineTo(this.x + (50 * this.size) / 10, this.y - (15 * this.size) / 10);
                Aquarium.crc.fillStyle = "#092732";
                Aquarium.crc.fill(tail);
                Aquarium.crc.strokeStyle = "#11322B";
                Aquarium.crc.stroke(tail);
                let pupill = new Path2D();
                pupill.arc(this.x - 20, this.y - 2, 5, 0, 2 * Math.PI);
                Aquarium.crc.fillStyle = "#000000";
                Aquarium.crc.fill(pupill);
            }
        }
        eating(essen) {
            let xAbstand = Math.abs(this.x - essen.x);
            let yAbstand = Math.abs(this.y - essen.y);
            if (Math.sqrt(Math.pow(xAbstand, 2) + Math.pow(yAbstand, 2)) < 50) {
                if (this.size > essen.size) {
                    this.size++;
                    Aquarium.highscore += 10;
                    return "goteaten";
                }
                else {
                    if (Aquarium.IsTheGameStillRunning == true) {
                        window.clearTimeout(Aquarium.time);
                        alert("you've died!");
                        return "itsover";
                    }
                }
            }
            return "nothing";
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > Aquarium.canvas.width) {
                this.x = Aquarium.canvas.width;
            }
            else if (this.x < 0) {
                this.x = 0;
            }
            else if (this.y > Aquarium.canvas.height) {
                this.y = Aquarium.canvas.height;
            }
            else if (this.y < 0) {
                this.y = 0;
            }
        }
        update() {
            this.draw();
        }
    }
    Aquarium.PlayableFish = PlayableFish;
})(Aquarium || (Aquarium = {}));
//# sourceMappingURL=PlayableFish.js.map