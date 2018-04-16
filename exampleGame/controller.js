let canvH;
let canv;
let ctx;
window.onload = function () {
    setUpGame();
}
function setUpGame() {
    canvH = document.getElementById("gc");
    canvH.height = window.innerHeight;
    canvH.width = window.innerWidth;
    canv = document.getElementById("gc");
    canv.height = window.innerHeight;
    canv.width = window.innerWidth;
    ctx = canv.getContext("2d");
    window.requestAnimationFrame(animation);
    setInterval(game, 1000 / 15);
}
window.addEventListener("gamepadconnected", function (e) {
    window.setInterval(getPressedButton, 1);
});
function getPressedButton() {
    var gp = navigator.getGamepads()[0];
    if (gp && gp.buttons) {
        for (var button in gp.buttons) {
            if (gp.buttons[button].pressed) {
                //12 up   13 down 15 right 14 left
                console.log('hello', button)
                //   thaButtonIs.innerHTML = button;
                switch (button) {
                    case "14":
                        //left
                        xv = -1; yv = 0;
                        break;
                    case "12":
                        //up
                        xv = 0; yv = -1;
                        break;
                    case "15":
                        //right
                        xv = 1; yv = 0;
                        break;
                    case "13":
                        //down
                        xv = 0; yv = 1;
                        break;
                    case "2":
                        //Y
                        break;
                    case "3":
                        //X
                        break;
                    case "0":
                        //B
                        break;
                    case "1":
                        //A
                        break;
                    case "4":
                        //L
                        break;
                    case "5":
                        //R
                        break;
                    case "8":
                        //Select
                        break;
                    case "9":
                        //Select
                        break;
                }

            }
        }
    }

}


function animation(e) {
    console.log('eee', e);
}
px = py = 10;
gs = tc = 20;
ax = ay = 15;
xv = yv = 0;
trail = [];
tail = 5;
fillStyle = 0;
fillStyles = ["#DDA0DD", "#F5DEB3", "#87CEEB"];

function game() {
    px += xv;
    py += yv;
    if (px < 0) {
        px = tc - 1;
    }
    if (px > tc - 1) {
        px = 0;
    }
    if (py < 0) {
        py = tc - 1;
    }
    if (py > tc - 1) {
        py = 0;
    }
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canv.width, canv.height);

    ctx.fillStyle = fillStyles[fillStyle];
    for (var i = 0; i < trail.length; i++) {
        ctx.fillRect(trail[i].x * gs, trail[i].y * gs, gs - 2, gs - 2);
        if (trail[i].x == px && trail[i].y == py) {
            tail = 5;
        }
    }
    trail.push({ x: px, y: py });
    while (trail.length > tail) {
        trail.shift();
    }

    if (ax == px && ay == py) {
        tail++;
        fillStyle = (fillStyle+1) % fillStyles.length
        ax = Math.floor(Math.random() * tc);
        ay = Math.floor(Math.random() * tc);
    }
    ctx.fillStyle = "red";
    ctx.fillRect(ax * gs, ay * gs, gs - 2, gs - 2);
}