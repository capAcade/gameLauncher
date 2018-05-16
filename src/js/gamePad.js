module.exports = class Gamepad {
    constructor (gpIndex){
        this.gpIndex = gpIndex;
        this.gamePadConnected = false;
        window.addEventListener("gamepadconnected", (e)=> {
            this.gamePadConnected = true;
        });
    }
    isBtnPushed(buttonIndex){
        this.gp = navigator.getGamepads()[this.gpIndex];
        if(this.gp === null || !this.gamePadConnected){
            return;
        }
        if(this.gp.buttons.length === 0 || this.gp.buttons[buttonIndex] === undefined){
            return;
        }
        return this.gp.buttons[buttonIndex].pressed;
    }
}