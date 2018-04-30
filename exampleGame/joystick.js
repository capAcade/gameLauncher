this.game = require('./game.js');

this.getPressedButton = () => {
    var gp = navigator.getGamepads()[0];
    if (gp && gp.buttons) {
        for (var button in gp.buttons) {
            if (gp.buttons[button].pressed) {
               setAction(button);
            }
        }
    }
}

this.setAction = (button) => {
    switch (button) {
        case "14":
            //left
            game.setLeft();
            break;
        case "12":
            //up
            game.setUp();
            break;
        case "15":
            game.setRight()
            //right
            break;
        case "13":
            //down
            game.setDown();
            break;
        case "2":
        case "3":
        case "0":
        case "1":
        case "4":
        case "5":
        case "8":
        case "9":
            break;
    }
}