const tileSize = 90;
let board = {
    x: 0,
    y: 0,
    color: 'black'
}
let cookie;
let speedX = 0, speedY = 0;
let trail = [], tail = 5;
let canv;
let ctx;
let snake = {
    x: 10,
    y: 10,
    color: 'lime'
};
let score = 0;

this.setUpGame = () => {
    canv = document.getElementById("gc");
    canv.height = window.innerHeight;
    canv.width = window.innerWidth;
    ctx = canv.getContext("2d");
    board.x = Math.floor(canv.width/tileSize);
    board.y = Math.floor(canv.height/tileSize);
    cookie = {
        x: Math.floor(Math.random() * board.x),
        y: Math.floor(Math.random() * board.y),
        color: 'red'
    };
    
    setInterval(game.getGame, 1000 / 8);
}

this.getGame = function() {
    snake.x += speedX;
    snake.y += speedY;
    if (snake.x < 0) {
        snake.x = board.x - 1;
    }
    if (snake.x > board.x - 1) {
        snake.x = 0;
    }
    if (snake.y < 0) {
        snake.y = board.y - 1;
    }
    if (snake.y > board.y - 1) {
        snake.y = 0;
    }
    ctx.fillStyle = board.color;
    ctx.fillRect(0, 0, canv.width, canv.height);

    ctx.fillStyle = snake.color;
    for (var i = 0; i < trail.length; i++) {
        ctx.fillRect(trail[i].x * tileSize, trail[i].y * tileSize, tileSize - 2, tileSize - 2);
        if (trail[i].x == snake.x && trail[i].y == snake.y) {
            tail = 5;
        }
    }
    trail.push({ x: snake.x, y: snake.y });
    while (trail.length > tail) {
        trail.shift();
    }
    tail++;
    

    if (cookie.x == snake.x && cookie.y == snake.y) {
        tail = 1;
        cookie.x = Math.floor(Math.random() * board.x);
        cookie.y = Math.floor(Math.random() * board.y);
        score ++;
    }
    ctx.fillStyle = cookie.color;
    ctx.fillRect(cookie.x * tileSize, cookie.y * tileSize, tileSize - 2, tileSize - 2);
}

this.setLeft =() => {
    speedX = -1; speedY = 0;   
}
this.setRight =() => {
    speedX = 1; speedY = 0;
}
this.setUp =() => {
    speedX = 0; speedY = -1;
}
this.setDown= () =>{
    speedX = 0; speedY = 1;    
} 
