namespace Aquarium {
    export class Fishsmall {
        x: number;
        y: number;
        dx: number;

        draw(): void {
            let body: Path2D = new Path2D();
            body.ellipse(this.x, this.y, 30, 50, 1.5, 0, 2 * Math.PI);
            crc.fillStyle = "#A360E2";
            crc.fill(body);
            crc.strokeStyle = "#11322B";
            crc.stroke(body);
            let tail: Path2D = new Path2D();
            tail.moveTo(this.x - 50, this.y + 4);
            tail.lineTo(this.x - 70, this.y + 25);
            tail.lineTo(this.x - 70, this.y - 15);
            crc.fillStyle = "#092732";
            crc.fill(tail);
            crc.strokeStyle = "#11322B";
            crc.stroke(tail);

            let pupill: Path2D = new Path2D();
            pupill.arc(this.x + 20, this.y - 2, 5, 0, 2 * Math.PI);
            crc.fillStyle = "#000000";
            crc.fill(pupill);

        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            this.x += this.dx;
            if (this.x + 30 > 900) {
                this.x = 0;
            }
        }
    }
}
