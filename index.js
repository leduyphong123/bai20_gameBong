let ctx = document.getElementById("gameCanvas");
let gameCanvas = ctx.getContext("2d");

ctx.width = 600;
ctx.height = 700;
ctx.style.border = "2px solid black";

function GameBoard(width, height) {
    this.width = width / 2;
    this.height = height / 2;
    this.setWidthHeight = function () {
        this.width += ball.x;
        this.height += ball.y;
    }

}
function Ball() {
    this.speed = 25;
    this.x = Math.floor(Math.random() * 76 + this.speed) / 30;
    this.y = Math.floor(Math.random() * 76 + this.speed) / 30;
    this.radian = 20
    this.update = function () {
        gameBoard.setWidthHeight();
        if (gameBoard.width - this.radian - 10 < 0 && this.x < 0) {
            this.x = -this.x;
        }
        if (gameBoard.width + this.radian / 2 > ctx.width && this.x > 0) {
            this.x = -this.x;
        }
        if (gameBoard.height - this.radian - 10 < 0 && this.y < 0) {
            this.y = -this.y;
        }
        if (gameBoard.height + this.radian / 2 + 20 > ctx.height && this.y > 0) {
            if (gameBoard.width - this.radian / 2 > bar.x && gameBoard.width - this.radian / 2 < bar.x + 100) {
                this.y = -this.y;
            }
        }
        gameCanvas.fillStyle = "white";
        gameCanvas.fillRect(0, 0, ctx.width, ctx.height);
        gameCanvas.beginPath();
        gameCanvas.fillStyle = "red";
        gameCanvas.arc(gameBoard.width - this.radian / 2, gameBoard.height - this.radian / 2, this.radian, 0, 2 * Math.PI);
        gameCanvas.fill();

    }
}
function Bar() {
    this.width = 100;
    this.x = ctx.width / 2;
    this.y = ctx.height - 20;
    this.xRight = function () {
        this.x += 10;
    }
    this.xLeght = function () {
        this.x -= 10;
    }
    this.update = function () {
        gameCanvas.fillRect(this.x, this.y, this.width, 10);
    }
}
let gameBoard = new GameBoard(ctx.width, ctx.height);

let ball = new Ball();
let bar = new Bar();
let lost = setInterval(updata, 1000 / 30);

function updata() {
    ball.update();
    bar.update();
    playLost();
}

function playLost() {
    if (gameBoard.height > ctx.height && ball.y > 0) {
        clearInterval(lost)
        alert("lost");
    }

}
window.addEventListener("keydown", onKey);

function onKey(evt) {
    console.log(evt.keyCode);
    switch (evt.keyCode) {
        case 39:
            bar.xRight();
            break;
        case 37:
            bar.xLeght();
            break;
        default:
            break;
    }
}


