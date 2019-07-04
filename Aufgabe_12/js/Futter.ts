namespace Aquarium {

    export class Futter extends MovingObject{
        constructor(x: number , y: number) {
            super();
            this.x = x;
            this.y = y;
            this.dy = Math.random() * 10 +2 ;
        }

        draw(): void {
            let futter: Path2D = new Path2D();
            futter.arc(this.x, this.y - 1, 5, 0, 360);
            crc.fillStyle = "yellow";
            crc.fill(futter);
            crc.stroke(futter);
        }

        move(): void {
            this.y += this.dy;
            if (this.y >= canvas.height -10) {
                this.dy = 0;
            }   
    }
}
}
