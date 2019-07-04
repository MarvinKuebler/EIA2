var Aquarium;
(function (Aquarium) {
    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("mousedown", futter);
    Aquarium.AnimationArray = [];
    let seaArray = [];
    let fps = 30;
    let imageData;
    function init() {
        Aquarium.canvas = document.getElementsByTagName("canvas")[0];
        Aquarium.crc = Aquarium.canvas.getContext("2d");
        drawBackground();
        imageData = Aquarium.crc.getImageData(0, 0, Aquarium.canvas.width, Aquarium.canvas.height);
        for (let i = 0; i < 15; i++) {
            let fishie = new Aquarium.Fishsmall();
            seaArray.push(fishie);
        }
        for (let i = 0; i < 30; i++) {
            let bigbubble = new Aquarium.BubbleBig();
            seaArray.push(bigbubble);
        }
        for (let i = 0; i < 20; i++) {
            let smallbubbles = new Aquarium.Bubblesmall();
            seaArray.push(smallbubbles);
        }
        for (let i = 0; i < 25; i++) {
            let fish = new Aquarium.FishBig();
            seaArray.push(fish);
        }
        console.log(seaArray);
        update();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        Aquarium.crc.clearRect(0, 0, Aquarium.canvas.width, Aquarium.canvas.height);
        Aquarium.crc.putImageData(imageData, 0, 0);
        for (let i = 0; i < seaArray.length; i++) {
            seaArray[i].update();
        }
    }
    function futter(_event) {
        let x = _event.clientX;
        let y = _event.clientY;
        if (x < Aquarium.canvas.width && y < Aquarium.canvas.height) {
            let futter = new Aquarium.Futter(x, y);
            seaArray.push(futter);
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
            let x = Math.random() * Aquarium.canvas.width;
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
            let x = Math.random() * Aquarium.canvas.width;
            let y = Math.random() * Aquarium.canvas.height + 450;
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
//# sourceMappingURL=canvas.js.map