document.addEventListener("DOMContentLoaded", init);
let crc;
let canvas;
function init() {
    canvas = document.getElementsByTagName("canvas")[0];
    crc = canvas.getContext("2d");
    drawWater();
    drawground();
    drawStone(700, 500);
    drawSeaWeed(100, 500);
    for (let i = 0; i < 30; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        drawbubbles(x, y);
    }
    for (let i = 0; i < 500; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * 600 + 400;
        drawSand(x, y);
    }
    for (let i = 0; i < 10; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        drawfish(x, y);
    }
}
function drawWater() {
    let water = new Path2D();
    water.rect(0, 0, 800, 400);
    crc.fillStyle = "#1874cd";
    crc.fill(water);
}
function drawground() {
    let drawground = new Path2D();
    drawground.rect(0, 400, 800, 200);
    crc.fillStyle = "#CDBA96";
    crc.fill(drawground);
}
function drawbubbles(_x, _y) {
    let bubble = new Path2D();
    bubble.arc(_x, _y, 20, 0, 2 * Math.PI);
    crc.strokeStyle = "#87cefa";
    crc.stroke(bubble);
}
function drawSand(_x, _y) {
    let sand = new Path2D();
    sand.arc(_x, _y, 1, 0, 2 * Math.PI);
    crc.fillStyle = "#8b795e";
    crc.fill(sand);
}
function drawfish(_x, _y) {
    let body = new Path2D();
    body.ellipse(_x, _y, 30, 50, 1.5, 0, 2 * Math.PI);
    crc.fillStyle = "#6EF5DE";
    crc.fill(body);
    crc.strokeStyle = "#11322B";
    crc.stroke(body);
    let tail = new Path2D();
    tail.moveTo(_x - 50, _y + 4);
    tail.lineTo(_x - 70, _y + 25);
    tail.lineTo(_x - 70, _y - 15);
    crc.fillStyle = "#092732";
    crc.fill(tail);
    crc.strokeStyle = "#11322B";
    crc.stroke(tail);
    let pupill = new Path2D();
    pupill.arc(_x + 20, _y - 2, 5, 0, 2 * Math.PI);
    crc.fillStyle = "#000000";
    crc.fill(pupill);
}
function drawStone(_x, _y) {
    let stone = new Path2D();
    stone.moveTo(520, 520);
    stone.quadraticCurveTo(100, 300, 50, 620);
    stone.closePath();
    crc.fillStyle = "#919191";
    crc.fill(stone);
    crc.strokeStyle = "#919191";
    crc.stroke(stone);
}
function drawSeaWeed(_x, _y) {
    let weed1 = new Path2D();
    weed1.moveTo(_x - 30, _y + 100);
    weed1.lineTo(_x - 30, _y + 30);
    weed1.lineTo(_x - 100, _y - 200);
    weed1.closePath();
    crc.fillStyle = "#698b22";
    crc.fill(weed1);
    crc.strokeStyle = "#556b2f";
    crc.stroke(weed1);
    let weed2 = new Path2D();
    weed2.moveTo(_x + 30, _y - 100);
    weed2.lineTo(_x + 30, _y - 30);
    weed2.lineTo(_x + 100, _y + 200);
    weed2.closePath();
    crc.fillStyle = "#698b22";
    crc.fill(weed2);
    crc.strokeStyle = "#556b2f";
    crc.stroke(weed2);
    let weed3 = new Path2D();
    weed3.moveTo(_x - 5, _y + 150);
    weed3.lineTo(_x - 30, _y + 30);
    weed3.lineTo(_x - 100, _y - 200);
    weed3.closePath();
    crc.fillStyle = "#698b22";
    crc.fill(weed3);
    crc.strokeStyle = "#556b2f";
    crc.stroke(weed3);
}
//# sourceMappingURL=aqua.js.map