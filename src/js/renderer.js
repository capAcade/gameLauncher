// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
console.log('i am triggerd');

const cntrl = {
    left: 37,
    right: 39,
    up: 38,
    down: 40,
    fire: 32
}

let focussed = 1;

document.getElementById(`${focussed}`).focus();

document.addEventListener("keydown",(evt) =>{
    console.log(focussed)
    switch(evt.keyCode) {
        case cntrl.left:
            focussed--;
            document.getElementById(`${focussed}`).focus();
            break;
        case cntrl.up:
            focussed++;
            document.getElementById(`${focussed}`).focus();
            break;
        case cntrl.right:
            focussed++;
            document.getElementById(`${focussed}`).focus();
            break;
        case cntrl.down:
            focussed--;
            document.getElementById(`${focussed}`).focus();
            break;
        case cntrl.fire:

            break; 
    }
});
