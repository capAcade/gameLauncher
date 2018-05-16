// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

class Gamepad {
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




let playerOneGp = new Gamepad(0);

const cntrl = {
    left: 37,
    right: 39,
    up: 38,
    down: 40,
    fire: 32
}

let focussedCol = 1;
let focussedRow = 1;

const setFocus = (direction) => {
    if(direction) {
        switch(direction) {
            case 'LEFT':
                focussedCol--;
                if(focussedCol <= 0){
                    focussedCol = 3;
                }
            break;
            case 'RIGHT':
                focussedCol++;
                if(focussedCol >= 4){
                    focussedCol = 1;
                }
            break;
            case 'UP':
                focussedRow--;
                if(focussedRow <= 0){
                    focussedRow = 2;
                }
            break;
            case 'DOWN':
                focussedRow++;
                if(focussedRow >= 3){
                    focussedRow = 1;
                }
            break;
        }
    }
    document.getElementById(`${focussedRow}-${focussedCol}`).focus();
}

document.addEventListener("keydown",(evt) =>{
    switch(evt.keyCode) {
        case cntrl.left:
            setFocus('LEFT');
            break;
        case cntrl.up:
            setFocus('UP');
            break;
        case cntrl.right:
            setFocus('RIGHT');
            break;
        case cntrl.down:
            setFocus('DOWN');
            break;
        case cntrl.fire:

            break; 
    }
});

const gameLoop =() => {

    if(playerOneGp.isBtnPushed(12)){
        setFocus('UP');
    }
    if(playerOneGp.isBtnPushed(14)){
        setFocus('LEFT');
    }
    if(playerOneGp.isBtnPushed(13)){
        setFocus('DOWN');
    }
    if(playerOneGp.isBtnPushed(12)){
        setFocus('RIGHT');
    }
    window.requestAnimationFrame(gameLoop);
}

window.requestAnimationFrame(gameLoop);
window.onload =  () => { 
    setFocus(); 
}

