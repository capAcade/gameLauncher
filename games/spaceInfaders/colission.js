class Colission {
    constructor (){
    }
    checkAndCollide(){
      //  console.log(enemys, bullets)

        enemys.forEach((enemy, indexEnemy) => {
            bullets.forEach((bullet, indexBullet) => {
                if(bullet.enemy){
                    if( bullet.position.y > playerOne.playerPosition.y &&  bullet.position.y < playerOne.playerPosition.y + 56  && bullet.position.x > playerOne.playerPosition.x  && bullet.position.x < playerOne.playerPosition.x+62){
                        bullet.destroy();
                        playerOne.destroy();
                        bullets.splice(indexBullet,1);

                    }
                    if( bullet.position.y > playerTwo.playerPosition.y &&  bullet.position.y < playerTwo.playerPosition.y + 56  && bullet.position.x > playerTwo.playerPosition.x  && bullet.position.x < playerTwo.playerPosition.x+62){
                        bullet.destroy();
                        playerTwo.destroy();
                        bullets.splice(indexBullet,1);
                    }

                }else{
                    if( bullet.position.y > enemy.position.y &&  bullet.position.y < enemy.position.y + 56  && bullet.position.x > enemy.position.x  && bullet.position.x < enemy.position.x+62){
                        enemy.destroy();
                        bullet.destroy();
                        bullets.splice(indexBullet,1);
                        enemys.splice(indexEnemy,1);
                        if(bullet.from){
                            score[bullet.from]++;
                            document.querySelector('.hid').innerHTML = `score player 1= ${score.plyr1} AND score player 2= ${score.plyr2}`
                        }
                    }
                    //clean up missed bullets
                    if(bullet.position.y <=  0) {
                        bullet.destroy();
                        bullets.splice(indexBullet,1);
                    }
                }
            });
        });
    }
}