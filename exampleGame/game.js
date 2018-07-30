const tileSize = 32;
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
let koe =  document.createElement('img');
koe.setAttribute('src', 'cow.png')
koe.setAttribute('width', '32');
koe.setAttribute('height', '32');
let fuego =  document.createElement('img');
fuego.setAttribute('src', 'fuego.png')
fuego.setAttribute('width', '32');
fuego.setAttribute('height', '32');
let kraan =  document.createElement('img');
kraan.setAttribute('src', 'kraan.png')
kraan.setAttribute('width', '32');
kraan.setAttribute('height', '32');
let cowSound = document.createElement('audio');
cowSound.src=('cow.ogg')
cowSound.load()

let snake = {
    x: 10,
    y: 10,
    color: 'aqua',
    headImage: koe,
    tailImage: fuego
};
let score = 0;
// koe.src = 'koetje.png';

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
        img: kraan,
        color: 'red'
    };
    cowSound.play();
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
        // ctx.fillRect(trail[i].x * tileSize, trail[i].y * tileSize, tileSize - 2, tileSize - 2);
        ctx.drawImage(snake.tailImage, trail[i].x * tileSize, trail[i].y * tileSize);
        if (trail[i].x == snake.x && trail[i].y == snake.y) {
            tail = 5;
        }
    }
    trail.push({ x: snake.x, y: snake.y });
    ctx.drawImage(snake.headImage, snake.x * tileSize, snake.y * tileSize);
    while (trail.length > tail) {
        trail.shift();
    }
    tail++;
    

    if (cookie.x == snake.x && cookie.y == snake.y) {
        tail = 1;
        cookie.y = Math.floor(Math.random() * board.y);
        cookie.x = Math.floor(Math.random() * board.x);
        score ++;
        cowSound.play()
    }
    ctx.drawImage(cookie.img, cookie.x * tileSize, cookie.y*tileSize );
    
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
