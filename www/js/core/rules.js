// Player's rules
player.on('pointerdown', (a)=>{
    gameplay.addChild(tris)
    pointerpos.x = a.data.global.x
    pointerpos.y = a.data.global.y
    
})
player.on('pointermove', (a)=>{
    pointerpos.x = a.data.global.x
    pointerpos.y = a.data.global.y
    
})
player.on('pointerup', (a)=>{
    pointerpos.x = null
    pointerpos.y = null
    gameplay.removeChild(tris)
})
player.on('pointerupoutside', (a)=>{
    let rad = Math.atan2(a.data.global.y - player.y, a.data.global.x - player.x)
    let distance = distanceAB(a.data.global, {x:player.x, y:player.y})
        if (distance > 50){distance = 50} 
    player.vx += Math.cos(rad) * distance * .15
    player.vy += Math.sin(rad) * distance * .15
    pointerpos.x = null
    pointerpos.y = null
    gameplay.removeChild(tris)
})

player.position.set(window.screen.width/2, window.screen.height/6)
gameplay.addChild(player)


// Enemy's rules
function enemyUpdate(){
    if(randomNum(60)==5){
        let enemy = new Entity()
            enemy.lineStyle(3+randomNum(2), 0xFF0F0F, 1);
            enemy.beginFill(0x000000, .01);
            enemy.drawCircle(0, 0, 15+randomNum(10));
            enemy.endFill();
            enemy.vy = 5
            enemy.x = randomNum(window.screen.width)
            enemy.y = -40   
        gameplay.addChild(enemy)
    }    
}

function enemyUpdate2(){
    if(randomNum(40)==5){
        let enemy = new Entity()
            enemy.lineStyle(3+randomNum(2), 0x534fe9, 1);
            enemy.beginFill(0x000000, .01);
            enemy.drawCircle(0, 0, 15+randomNum(10));
            enemy.endFill();
            enemy.vy = 3
            enemy.x = randomNum(window.screen.width)
            enemy.y = -40   
        gameplay.addChild(enemy)
    }    
}
