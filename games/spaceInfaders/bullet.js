class Bullet {
    constructor (bulletConfig){
        this.avatar = new Image();   // Create new img element
        if(bulletConfig.enemy){
            this.avatar.src = 'assets/laserRed16.png'
        }else {
            this.avatar.src = 'assets/laserBlue06.png'
        }

        this.position = {
            x: bulletConfig.position.x,
            y: bulletConfig.position.y
        }
        this.enemy = bulletConfig.enemy;
        this.destroyed = false;
        this.from = bulletConfig.from;
        ctx.drawImage(this.avatar,this.position.x,this.position.y, 13,37);
    }
    destroy(){
        this.destroyed = true;
        ctx.clearRect(this.position.x, this.position.y, 13,37);
    }
    update(){
        ctx.clearRect(this.position.x, this.position.y, 13,37);
        if (this.enemy){
            this.position.y = this.position.y + 5;
            if (this.position.y >=  0 || !this.destroyed){
                ctx.drawImage(this.avatar,this.position.x,this.position.y, 13,37);
            }
        } else {
            this.position.y = this.position.y - 5;
            if (this.position.y >=  0 || !this.destroyed){
                ctx.drawImage(this.avatar,this.position.x,this.position.y, 13,37);
            }
        }
    }
}