class Player {
    constructor (playerConfig){
        if(playerConfig === undefined){
            console.error('missing playerConfig');
            return;
        }
        this.left = false;
        this.down =  false;
        this.up = false;
        this.right = false;
        this.fire = false;
        this.timer = 0;
        this.plyr = playerConfig.plyr;
        this.destroyed = false;
        
        this.cntrl = {};
        this.cntrl.left = playerConfig.cntrl.left;
        this.cntrl.up = playerConfig.cntrl.up;
        this.cntrl.down = playerConfig.cntrl.down;
        this.cntrl.right = playerConfig.cntrl.right;
        this.cntrl.fire = playerConfig.cntrl.fire;

        this.playerPosition = {
            x: playerConfig.startPosition.x,
            y: playerConfig.startPosition.y
        }
        this.gp = new Gamepad(playerConfig.gamePadIndex);

        this.avatar = new Image();   // Create new img element
        this.avatar.src = playerConfig.avatar;
        document.addEventListener("keydown",(evt) =>{
            switch(evt.keyCode) {
                case this.cntrl.left:
                this.left = true;
                    break;
                case this.cntrl.up:
                this.up = true;
                    break;
                case this.cntrl.right:
                this.right = true;
                    break;
                case this.cntrl.down:
                this.down = true;
                    break;
                case this.cntrl.fire:
                this.fire = true;
                    break; 
            }
        });
        
        document.addEventListener("keyup",(evt) =>{
            switch(evt.keyCode) {
                case this.cntrl.left:
                this.left = false;
                    break;
                case this.cntrl.up:
                this.up = false;
                    break;
                case this.cntrl.right:
                this.right = false;
                    break;
                case this.cntrl.down:
                this.down = false;
                    break;
                case this.cntrl.fire:
                this.fire = false;
                    break;    
            }
        });
    }

    updatePlayer() {
       if(this.timer !== 0){
           this.timer--;
       }
        ctx.clearRect(this.playerPosition.x, this.playerPosition.y, 66,50);
        if(this.right || this.gp.isBtnPushed(15)){
            this.playerPosition.x = this.playerPosition.x + 5 ;
        }
        if(this.left || this.gp.isBtnPushed(14)){
            this.playerPosition.x = this.playerPosition.x - 5 ;
        }
        if(this.up || this.gp.isBtnPushed(12)){
            this.playerPosition.y = this.playerPosition.y - 5 ;
        }
        if(this.down || this.gp.isBtnPushed(13)){
            this.playerPosition.y = this.playerPosition.y + 5 ;
        }
        if(this.fire || this.gp.isBtnPushed(1)){
            if (this.timer === 0) {
                var bulletConf = {
                    from: this.plyr,
                    position: {
                    x :this.playerPosition.x, 
                    y: this.playerPosition.y
                }}

                bullets.push(new Bullet(bulletConf));
                this.timer = 40;
            }
        }
        if(!this.destroyed){
            ctx.drawImage(this.avatar,this.playerPosition.x,this.playerPosition.y, 66,50);
        }
        
    }
    destroy (){
        this.destroyed = true;
        ctx.clearRect(this.playerPosition.x, this.playerPosition.y, 66,50);
    }

}