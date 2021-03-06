namespace Aquarium {
	export class BubbleBig {
		x: number;
		y: number;
		dy: number;
		

		draw(): void {
                let bubble: Path2D = new Path2D();
                bubble.arc(this.x, this.y, 20, 0, 2 * Math.PI);
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
                this.y = 600;
            
		}
	}
}