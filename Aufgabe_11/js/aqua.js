var Aquarium;
(function (Aquarium) {
    document.addEventListener("DOMContentLoaded", init);
    let canvas;
    let fisharray = [];
    let otherFisharray = [];
    let bubblesarray = [];
    let otherBubblesarray = [];
    let fps = 30;
    let imageData;
    function init() {
        canvas = document.getElementsByTagName("canvas")[0];
        Aquarium.crc = canvas.getContext("2d");
        drawBackground();
        imageData = Aquarium.crc.getImageData(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < 25; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            let dx = Math.random() * 15;
            let fish;
            fish = new Aquarium.FishBig();
            fish.x = x;
            fish.y = y;
            fish.dx = dx;
            fisharray.push(fish);
            fish.draw();
            console.log(fish);
        }
        for (let i = 0; i < 15; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            let dx = Math.random() * 10;
            let fishie;
            fishie = new Aquarium.Fishsmall();
            fishie.x = x;
            fishie.y = y;
            fishie.dx = dx;
            otherFisharray.push(fishie);
            fishie.draw();
            console.log(fishie);
        }
        for (let i = 0; i < 30; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            let dy = Math.random() * -3 - 1;
            let bigbubbles;
            bigbubbles = new Aquarium.BubbleBig();
            bigbubbles.x = x;
            bigbubbles.y = y;
            bigbubbles.dy = dy;
            otherBubblesarray.push(bigbubbles);
            bigbubbles.draw();
            console.log(bigbubbles);
        }
        for (let i = 0; i < 20; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            let dy = Math.random() * -2 - 1;
            let smallbubbles;
            smallbubbles = new Aquarium.Bubblesmall();
            smallbubbles.x = x;
            smallbubbles.y = y;
            smallbubbles.dy = dy;
            bubblesarray.push(smallbubbles);
            smallbubbles.draw();
            console.log(smallbubbles);
        }
        update();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        Aquarium.crc.clearRect(0, 0, canvas.width, canvas.height);
        Aquarium.crc.putImageData(imageData, 0, 0);
        for (let i = 0; i < fisharray.length; i++) {
            fisharray[i].update();
        }
        for (let i = 0; i < otherFisharray.length; i++) {
            otherFisharray[i].update();
        }
        for (let i = 0; i < otherBubblesarray.length; i++) {
            otherBubblesarray[i].update();
        }
        for (let i = 0; i < bubblesarray.length; i++) {
            bubblesarray[i].update();
        }
    }
    function drawBackground() {
        let water = new Path2D();
        water.rect(0, 0, 800, 400);
        Aquarium.crc.fillStyle = "#1874cd";
        Aquarium.crc.fill(water);
        let drawground = new Path2D();
        drawground.rect(0, 400, 800, 200);
        Aquarium.crc.fillStyle = "#CDBA96";
        Aquarium.crc.fill(drawground);
        for (let i = 0; i < 2500; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * 600 + 400;
            let sand = new Path2D();
            sand.arc(x, y, 1, 0, 2 * Math.PI);
            Aquarium.crc.fillStyle = "#8b795e";
            Aquarium.crc.fill(sand);
        }
        let stone = new Path2D();
        stone.moveTo(520, 520);
        stone.quadraticCurveTo(100, 300, 50, 620);
        stone.closePath();
        Aquarium.crc.fillStyle = "#919191";
        Aquarium.crc.fill(stone);
        Aquarium.crc.strokeStyle = "#919191";
        Aquarium.crc.stroke(stone);
        for (let i = 0; i < 50; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height + 450;
            let weed1 = new Path2D();
            weed1.moveTo(x - 30, y + 100);
            weed1.lineTo(x - 30, y + 30);
            weed1.lineTo(x - 100, y - 200);
            weed1.closePath();
            Aquarium.crc.fillStyle = "#089654";
            Aquarium.crc.fill(weed1);
            Aquarium.crc.strokeStyle = "#556b2f";
            Aquarium.crc.stroke(weed1);
        }
    }
})(Aquarium || (Aquarium = {}));
//# sourceMappingURL=aqua.js.map