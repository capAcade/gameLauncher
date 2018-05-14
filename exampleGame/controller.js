this.game = require('./game.js');
this.joystick = require('./joystick.js');
const Keyboard = require('./keyboard.js');

this.keyboard = new Keyboard(this.game)

window.onload = function () {
    game.setUpGame();
}

window.addEventListener("gamepadconnected", function (e) {
    window.setInterval(joystick.getPressedButton, 1);
});
