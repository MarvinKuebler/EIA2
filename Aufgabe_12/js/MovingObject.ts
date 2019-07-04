namespace Aquarium {
    export class MovingObject {
        x: number;
        y: number;
        dx: number;
        dy: number;
        constructor() {
          this.x = Math.random()*Aquarium.crc.canvas.width;
          this.y = Math.random()*Aquarium.crc.canvas.height;
        }


        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x < 20)
                this.x = canvas.width + 100;
        }

        draw():void{}
    }
}
