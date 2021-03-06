namespace Aquarium {
	export class Bubblesmall extends MovingObject{
		x: number;
		y: number;
		dy: number;

		constructor() {
			super();
			this.dy = Math.random() * -3 - 1;
		}

		draw(): void {
                let bubble: Path2D = new Path2D();
                bubble.arc(this.x, this.y, 12, 0, 2 * Math.PI);
                crc.strokeStyle = "#87cefa";
                crc.stroke(bubble);
            
		}

		update(): void {
			this.move();
			this.draw();
		}

		move(): void {
                this.y += this.dy;
                if (this.y <0)
                    this.y = 600;;
		}
	}
}