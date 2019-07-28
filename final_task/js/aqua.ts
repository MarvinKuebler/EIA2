namespace Aquarium {

    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("keydown", moveTheFish);
    export let crc: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    
    export let highscore: number = 0;
    export let yournamehere: string;
    export let time: number;


    let fps: number = 30;
    let imageData: ImageData;
    let ArrayAllObjects : AllObjects [] = []; 
    export let IsTheGameStillRunning: boolean = true;

    let playablefish: PlayableFish;


    function init(): void {
        canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");
        refresh();
        drawBackground();

        imageData = crc.getImageData(0, 0, canvas.width, canvas.height);
        playablefish= new PlayableFish();
        playablefish.draw();

        

        for (let i: number = 0; i < 10; i++) { //green fish
            let x: number = Math.floor (Math.random()*1000)+700;
            let y: number = Math.random() * canvas.height;
            let dx: number = Math.random() * 10; //pace
            let fish: FishBig;
            fish = new FishBig();
            fish.x = x;
            fish.y = y;
            fish.dx = dx;
            ArrayAllObjects.push(fish);
            fish.draw();
            console.log(fish);
        }

        for (let i: number = 0; i < 10; i++) { //purple fish
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * canvas.height;
            let dx: number = Math.random() * 10;
            let fishie: Fishsmall;
            fishie = new Fishsmall();
            fishie.x = x;
            fishie.y = y;
            fishie.dx = dx;
            ArrayAllObjects.push(fishie);
            fishie.draw();
            console.log(fishie);
        }

        update();
    }

    function update(): void {
        window.setTimeout(update, 1000 / fps);
        crc.clearRect(0, 0, canvas.width, canvas.height);
        crc.putImageData(imageData, 0, 0);

        for (let i: number = 0; i < ArrayAllObjects.length; i++) {
            ArrayAllObjects[i].update();
            if (playablefish.eating(ArrayAllObjects[i]) == "goteaten") {
                ArrayAllObjects.splice(i,1);
            }
            else if(playablefish.eating(ArrayAllObjects[i]) == "itsover"&&IsTheGameStillRunning==true) {
                yournamehere = prompt("Your score:" +  highscore + "insert your name" );
                insert();
                refresh();
                IsTheGameStillRunning=false;
            }
        }

        crc.fillStyle = "#7BDDF2";
        crc.font ="2em Bangers";
        crc.fillText ("Highscore: " + highscore.toString(), 30, 40);
        playablefish.update();

        if (ArrayAllObjects.length == 0 && IsTheGameStillRunning==true) {
            youwon();
        }
    }

    function drawBackground(): void {

        let water: Path2D = new Path2D();
        water.rect(0, 0, 800, 400);
        crc.fillStyle = "#1874cd";
        crc.fill(water);

        let drawground: Path2D = new Path2D();
        drawground.rect(0, 400, 800, 200);
        crc.createLinearGradient;
        crc.fillStyle = "#CDBA96";
        crc.fill(drawground);


       
        let stone: Path2D = new Path2D();
        stone.moveTo(520, 520);
        stone.quadraticCurveTo(100, 300, 50, 620);
        stone.closePath();
        crc.fillStyle = "#919191";
        crc.fill(stone);
        crc.strokeStyle = "#919191";
        crc.stroke(stone);


        for (let i: number = 0; i < 350; i++) {
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * canvas.height + 400;
            let weed1: Path2D = new Path2D();
            weed1.moveTo(x - 30, y + 100);
            weed1.lineTo(x - 30, y + 30);
            weed1.lineTo(x - 100, y - 200);
            weed1.closePath();
            crc.fillStyle = "#089654";
            crc.fill(weed1);
            crc.strokeStyle = "#556b2f";
            crc.stroke(weed1);
        }
    }

    export function youwon (){
        IsTheGameStillRunning=false
        window.clearTimeout (time);
        yournamehere = prompt("You don't suck! you've reached: " + highscore + "your name");
        insert ();
        refresh();

    }

    function moveTheFish(e: KeyboardEvent):void{
        if (e.keyCode == 65) {
            playablefish.x -= 25;
            playablefish.direction = "links"; //links

        }
        else if (e.keyCode == 87) {
            playablefish.y -= 25; //oben
            
        }
        else if (e.keyCode == 68) {
            playablefish.x += 25;
            playablefish.direction = "rechts"; //rechts
        
        }
        else if (e.keyCode == 83) {
            playablefish.y += 25; //unten
        }
    } 
}
