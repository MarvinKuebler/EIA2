namespace Aquarium {

    document.addEventListener("DOMContentLoaded", init);
    export let crc: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;
    let fisharray: FishBig[] = [];
    let otherFisharray: Fishsmall[] = [];
    let bubblesarray: BubbleBig[] = [];
    let otherBubblesarray: Bubblesmall[] = [];
    let fps: number = 30;
    let imageData: ImageData;



    function init(): void {
        canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");
        drawBackground();

        imageData = crc.getImageData(0, 0, canvas.width, canvas.height);

        for (let i: number = 0; i < 25; i++) {
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * canvas.height;
            let dx: number = Math.random() * 15;
            let fish: FishBig;
            fish = new FishBig();
            fish.x = x;
            fish.y = y;
            fish.dx = dx;
            fisharray.push(fish);
            fish.draw();
            console.log(fish);
        }

        for (let i: number = 0; i < 15; i++) {
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * canvas.height;
            let dx: number = Math.random() * 10;
            let fishie: Fishsmall;
            fishie = new Fishsmall();
            fishie.x = x;
            fishie.y = y;
            fishie.dx = dx;
            otherFisharray.push(fishie);
            fishie.draw();
            console.log(fishie);
        }

        for (let i: number = 0; i < 30; i++) {
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * canvas.height;
            let dy: number = Math.random() * -3 - 1;
            let bigbubbles: BubbleBig;
            bigbubbles = new BubbleBig();
            bigbubbles.x = x;
            bigbubbles.y = y;
            bigbubbles.dy = dy;
            otherBubblesarray.push(bigbubbles);
            bigbubbles.draw();
            console.log(bigbubbles);
        }

        for (let i: number = 0; i < 20; i++) {
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * canvas.height;
            let dy: number = Math.random() * -2 - 1;
            let smallbubbles: Bubblesmall;
            smallbubbles = new Bubblesmall();
            smallbubbles.x = x;
            smallbubbles.y = y;
            smallbubbles.dy = dy;
            bubblesarray.push(smallbubbles);
            smallbubbles.draw();
            console.log(smallbubbles);
        }
        update();
    }

    function update(): void {
        window.setTimeout(update, 1000 / fps);
        crc.clearRect(0, 0, canvas.width, canvas.height);
        crc.putImageData(imageData, 0, 0);

        for (let i: number = 0; i < fisharray.length; i++) {
            fisharray[i].update();
        }

        for (let i: number = 0; i < otherFisharray.length; i++) {
            otherFisharray[i].update();
        }

        for (let i: number = 0; i < otherBubblesarray.length; i++) {
            otherBubblesarray[i].update();
        }

        for (let i: number = 0; i < bubblesarray.length; i++) {
            bubblesarray[i].update();

        }


    }
    function drawBackground(): void {

        let water: Path2D = new Path2D();
        water.rect(0, 0, 800, 400);
        crc.fillStyle = "#1874cd";
        crc.fill(water);

        let drawground: Path2D = new Path2D();
        drawground.rect(0, 400, 800, 200);
        crc.fillStyle = "#CDBA96";
        crc.fill(drawground);


        for (let i: number = 0; i < 2500; i++) {
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * 600 + 400;
            let sand: Path2D = new Path2D();
            sand.arc(x, y, 1, 0, 2 * Math.PI);
            crc.fillStyle = "#8b795e";
            crc.fill(sand);
        }

        let stone: Path2D = new Path2D();
        stone.moveTo(520, 520);
        stone.quadraticCurveTo(100, 300, 50, 620);
        stone.closePath();
        crc.fillStyle = "#919191";
        crc.fill(stone);
        crc.strokeStyle = "#919191";
        crc.stroke(stone);


        for (let i: number = 0; i < 50; i++) {
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * canvas.height + 450;
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
}



