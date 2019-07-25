namespace Aquarium{

    export class PlayableFish {
        size: number=10;
        x: number;
        y: number;
        dx: number;
        dy: number;
       direction: string = ("rechts")
        
        constructor(){
            this.x = canvas.width / 2;
            this.y = canvas.height / 2;
            this.dx= 0;
            this.dy= 0;
        }

draw(): void {
    if (this.direction == "rechts"){
        let body: Path2D = new Path2D();
        body.ellipse(this.x, this.y, (this.size * 20) / 10, 55, 1.5, 0, 2 * Math.PI);
        crc.fillStyle = "#FF0000";
        crc.fill(body);
        crc.strokeStyle = "#11322B";
        crc.stroke(body);
        let tail: Path2D = new Path2D();
        tail.moveTo(this.x - (15 * this.size) / 10, this.y + (4 * this.size) / 10);
        tail.lineTo(this.x - (50 * this.size) / 10, this.y + (25 * this.size) /10);
        tail.lineTo(this.x - (50 * this.size) / 10, this.y - (15 * this.size) / 10);
        crc.fillStyle = "#092732";
        crc.fill(tail);
        crc.strokeStyle = "#11322B";
        crc.stroke(tail);
    
        let pupill: Path2D = new Path2D();
        pupill.arc(this.x + 20, this.y - 2, 5, 0, 2 * Math.PI);
        crc.fillStyle = "#000000";
        crc.fill(pupill);
}
else {
    let body: Path2D = new Path2D();
    body.ellipse(this.x, this.y, (this.size * 20) /10, 55, 1.5, 0, 2 * Math.PI);
    crc.fillStyle = "#FF0000";
    crc.fill(body);
    crc.strokeStyle = "#11322B";
    crc.stroke(body);
    let tail: Path2D = new Path2D();
    tail.moveTo(this.x + (30 * this.size) / 10, this.y + (4 * this.size) / 10);
    tail.lineTo(this.x + (50 * this.size) / 10, this.y + (25 * this.size) /10);
    tail.lineTo(this.x + (50 * this.size) / 10, this.y - (15 * this.size) /10);
    crc.fillStyle = "#092732";
    crc.fill(tail);
    crc.strokeStyle = "#11322B";
    crc.stroke(tail);

    let pupill: Path2D = new Path2D();
    pupill.arc(this.x - 20, this.y - 2, 5, 0, 2 * Math.PI);
    crc.fillStyle = "#000000";
    crc.fill(pupill);
}
}

eating (essen:AlleObjekte) : string {
    let xAbstand: number = Math.abs(this.x - essen.x);
    let yAbstand: number = Math.abs(this.y - essen.y);
    if (Math.sqrt(Math.pow(xAbstand,2) + Math.pow (yAbstand,2)) <50 ) {
        if (this.size > essen.size) {
            this.size++;
            highscore += 10;
            return "goteaten";
        }
        else{
            if(IsTheGameStillRunning==true){
                window.clearTimeout (time);
                alert("you've died!");
                return "itsover";
            }
        }
    }   
        return "nothing";
    
}

move(): void{
    this.x += this.dx;
    this.y += this.dy;

    if (this.x > canvas.width) {
        this.x = canvas.width;
    }
    else if (this.x < 0) {
        this.x = 0;
    }
    else if (this.y > canvas.height) {
        this.y = canvas.height;
    }
    else if (this.y < 0) {
        this.y = 0;}
}
        
        update(): void {
            this.draw();
}
    }
}
