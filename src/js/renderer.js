// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.


const cntrl = {
    left: 37,
    right: 39,
    up: 38,
    down: 40,
    fire: 17
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
        document.getElementById(`${focussedRow}-${focussedCol}`).click();
            break; 
    }
});
