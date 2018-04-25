this.game = require('./game.js');
this.joystick = require('./joystick.js');

window.onload = function () {
    game.setUpGame();
}

window.addEventListener("gamepadconnected", function (e) {
   console.log('hello')
    window.setInterval(joystick.getPressedButton, 2000);
});