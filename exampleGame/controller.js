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
    window.setInterval(
        function () {
            var gp = navigator.getGamepads()[0];
            for (var button in gp.buttons) {
                if (gp.buttons[button].pressed) {
                    //12 up   13 down 15 right 14 left
                    console.log('hello', button)
                    //   thaButtonIs.innerHTML = button;
                    switch (button) {
                        case "14":
                            console.log('left')
                            xv = -1; yv = 0;
                            break;
                        case "12":
                            console.log('up')
                            xv = 0; yv = -1;
                            break;
                        case "15":
                            console.log('right')
                            xv = 1; yv = 0;
                            break;
                        case "13":
                            console.log('down')
                            xv = 0; yv = 1;
                            break;
                    }

                }
            }
        }, 1);
});

function animation(e) {
    console.log('eee', e);
}
px = py = 10;
gs = tc = 20;
ax = ay = 15;
xv = yv = 0;
trail = [];
tail = 5;
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

    ctx.fillStyle = "lime";
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
        ax = Math.floor(Math.random() * tc);
        ay = Math.floor(Math.random() * tc);
    }
    ctx.fillStyle = "red";
    ctx.fillRect(ax * gs, ay * gs, gs - 2, gs - 2);
}