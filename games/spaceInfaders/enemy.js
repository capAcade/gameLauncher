class Enemy {
    constructor (enemyConfig){
        this.avatar = new Image();   // Create new img element
        this.avatar.src = enemyConfig.avatar
        this.goLeft = true;
        this.movementSpeed = enemyConfig.movementSpeed;
        this.position = {
            x: enemyConfig.position.x,
            y: enemyConfig.position.y
        }
        this.destroyed = false;
        this.fireTimer = Math.floor(Math.random() * (1000 - 100) + 100);
        ctx.drawImage(this.avatar,this.position.x,this.position.y, 62,56);
    }
    update (){
        this.fireTimer--;
        ctx.clearRect(this.position.x, this.position.y, 62,56);
        if(this.destroyed){
            return;
        }
        if (this.goLeft){
            this.position.x = this.position.x - this.movementSpeed;
            if (this.position.x <= 0){
                this.position.y = this.position.y + 60;
                this.goLeft = false;
            }
        } else {
            this.position.x = this.position.x + this.movementSpeed;
            if(this.position.x >= can.width -50){
                this.position.y = this.position.y + 60;
                this.goLeft = true;
            }
        }
        if (this.fireTimer ===  0){
            this.fireTimer = Math.floor(Math.random() * (1000 - 100) + 100);
            var bulletConf = {
                enemy: true,
                position: {
                x :this.position.x, 
                y: this.position.y,
            }}
            bullets.push(new Bullet(bulletConf));
        }
        ctx.drawImage(this.avatar,this.position.x,this.position.y, 62,56);
    }
    destroy () {
        this.destroyed = true;
        ctx.clearRect(this.position.x, this.position.y, 62,56);
    }
}