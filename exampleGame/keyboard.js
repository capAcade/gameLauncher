class Keyboard {
    constructor(game) {
        this.game = game;
        this._init()
    }

    _init() {
        window.addEventListener("keydown", (event) => {
            this.perform(event.key);
        })
    }

    perform(key) {
        switch (key) {
            case "ArrowLeft":
            case "a":
            case "A":
                //left
                this.game.setLeft();
                break;
            case "ArrowUp":
            case "w":
            case "W":
                this.game.setUp();
                break;
            case "ArrowRight":
            case "d":
            case "D":
                this.game.setRight()
                //right
                break;
            case "ArrowDown":
            case "x":
            case "X":
                //down
                game.setDown();
                break;
            default:
                break;
        }
    }
}

module.exports = Keyboard;