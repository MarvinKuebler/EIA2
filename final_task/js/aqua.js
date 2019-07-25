var Aquarium;
(function (Aquarium) {
    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("keydown", bewegeDenFisch);
    Aquarium.highscore = 0;
    let fps = 30;
    let imageData;
    let ArrayAlleObjekte = [];
    Aquarium.IsTheGameStillRunning = true;
    let playablefish;
    function init() {
        Aquarium.canvas = document.getElementsByTagName("canvas")[0];
        Aquarium.crc = Aquarium.canvas.getContext("2d");
        Aquarium.refresh();
        drawBackground();
        imageData = Aquarium.crc.getImageData(0, 0, Aquarium.canvas.width, Aquarium.canvas.height);
        playablefish = new Aquarium.PlayableFish();
        playablefish.draw();
        for (let i = 0; i < 10; i++) { //green fish
            let x = Math.floor(Math.random() * 1000) + 700;
            let y = Math.random() * Aquarium.canvas.height;
            let dx = Math.random() * 10; //pace
            let fish;
            fish = new Aquarium.FishBig();
            fish.x = x;
            fish.y = y;
            fish.dx = dx;
            ArrayAlleObjekte.push(fish);
            fish.draw();
            console.log(fish);
        }
        for (let i = 0; i < 10; i++) { //purple fish
            let x = Math.random() * Aquarium.canvas.width;
            let y = Math.random() * Aquarium.canvas.height;
            let dx = Math.random() * 10;
            let fishie;
            fishie = new Aquarium.Fishsmall();
            fishie.x = x;
            fishie.y = y;
            fishie.dx = dx;
            ArrayAlleObjekte.push(fishie);
            fishie.draw();
            console.log(fishie);
        }
        /*for (let i: number = 0; i < 25; i++) {
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * canvas.height;
            let dy: number = Math.random() * -3 - 1;
            let bigbubbles: BubbleBig;
            bigbubbles = new BubbleBig();
            bigbubbles.x = x;
            bigbubbles.y = y;
            bigbubbles.dy = dy;
            ArrayAlleObjekte.push(bigbubbles);
            bigbubbles.draw();
            console.log(bigbubbles);
        }

        for (let i: number = 0; i < 25; i++) {
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * canvas.height;
            let dy: number = Math.random() * -2 - 1;
            let smallbubbles: Bubblesmall;
            smallbubbles = new Bubblesmall();
            smallbubbles.x = x;
            smallbubbles.y = y;
            smallbubbles.dy = dy;
            ArrayAlleObjekte.push(smallbubbles);
            smallbubbles.draw();
            console.log(smallbubbles);
        }*/
        update();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        Aquarium.crc.clearRect(0, 0, Aquarium.canvas.width, Aquarium.canvas.height);
        Aquarium.crc.putImageData(imageData, 0, 0);
        for (let i = 0; i < ArrayAlleObjekte.length; i++) {
            ArrayAlleObjekte[i].update();
            if (playablefish.eating(ArrayAlleObjekte[i]) == "goteaten") {
                ArrayAlleObjekte.splice(i, 1);
            }
            else if (playablefish.eating(ArrayAlleObjekte[i]) == "itsover" && Aquarium.IsTheGameStillRunning == true) {
                /*ArrayAlleObjekte.splice(0, ArrayAlleObjekte.length)*/
                Aquarium.yournamehere = prompt("Your score:" + Aquarium.highscore + "insert your name");
                Aquarium.insert();
                Aquarium.refresh();
                Aquarium.IsTheGameStillRunning = false;
            }
        }
        Aquarium.crc.fillStyle = "lightblue";
        Aquarium.crc.font = "2em Bangers";
        Aquarium.crc.fillText("Highscore: " + Aquarium.highscore.toString(), 570, 40);
        playablefish.update();
        if (ArrayAlleObjekte.length == 0 && Aquarium.IsTheGameStillRunning == true) {
            youwon();
        }
    }
    function drawBackground() {
        let water = new Path2D();
        water.rect(0, 0, 800, 400);
        Aquarium.crc.fillStyle = "#1874cd";
        Aquarium.crc.fill(water);
        let drawground = new Path2D();
        drawground.rect(0, 400, 800, 200);
        Aquarium.crc.createLinearGradient;
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
        for (let i = 0; i < 350; i++) {
            let x = Math.random() * Aquarium.canvas.width;
            let y = Math.random() * Aquarium.canvas.height + 400;
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
    function youwon() {
        Aquarium.IsTheGameStillRunning = false;
        window.clearTimeout(Aquarium.time);
        Aquarium.yournamehere = prompt("You don't suck! you've reached: " + Aquarium.highscore + "your name");
        Aquarium.insert();
        Aquarium.refresh();
    }
    Aquarium.youwon = youwon;
    function bewegeDenFisch(e) {
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
})(Aquarium || (Aquarium = {}));
//# sourceMappingURL=aqua.js.map