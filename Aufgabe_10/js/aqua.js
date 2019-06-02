document.addEventListener("DOMContentLoaded", init);
let crc;
let canvas;
function init() {
    canvas = document.getElementsByTagName("canvas")[0];
    crc = canvas.getContext("2d");
    for (let i = 0; i < 10; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        fish(x, y);
    }
}
function fish(_x, _y) {
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
function bubbles(_x, _y) {
    let bubble = new Path2D();
    bubble.arc(_x, _y, 20, 0, 2 * Math.PI);
    crc.strokeStyle = "#323332";
    crc.stroke(bubble);
}
for (let i = 0; i < 30; i++) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    bubbles(x, y);
}
//# sourceMappingURL=aqua.js.map