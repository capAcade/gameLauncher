let px, py, gs, tc, ax, ay, xv, yv, trail, tail;
let canvH;
let canv;
let ctx;
px = py = 10;
gs = tc = 20;
ax = ay = 15;
xv = yv = 0;
trail = [];
tail = 5;

this.setUpGame = () => {
    canvH = document.getElementById("gc");
    canvH.height = window.innerHeight;
    canvH.width = window.innerWidth;
    canv = document.getElementById("gc");
    canv.height = window.innerHeight;
    canv.width = window.innerWidth;
    ctx = canv.getContext("2d");
    setInterval(game.getGame, 1000 / 15);
}

this.getGame = function() {
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

this.setLeft =() => {
    xv = -1; yv = 0;   
}
this.setRight =() => {
    xv = 1; yv = 0;
}
this.setUp =() => {
    xv = 0; yv = -1;
}
this.setDown= () =>{
    xv = 0; yv = 1;    
} 
