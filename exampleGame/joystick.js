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
    console.log('aaa', button);
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
            //Start
            break;
    }
}