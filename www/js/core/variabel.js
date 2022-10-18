var to_render
var ticker = new PIXI.Ticker()

var gameplay = new PIXI.Container
gameplay.name = 'Gameplay'

var hud = new PIXI.Container
hud.name = 'HUD'

var spawnarea = new PIXI.Container
spawnarea.name = 'Spawn Area'

var pointerpos = {x:null, y:null}

var timepasses = 0

// document.querySelector("canvas").onpointermove  =pointerposF(a)
// document.querySelector("canvas").onpointerup = pointerposF(a)

class Entity extends PIXI.Graphics{
    constructor(){
        super();
        this._vx = 0;
        this._vy = 0;
        this._angleTo = 0;
        this._gravity = false;        
    }

    set x(n){this.position.x = n}
    get x(){return this.position.x}

    set y(n){this.position.y = n}
    get y(){return this.position.y}
    
    set vx(n){this._vx = n}
    get vx(){return this._vx}

    set vy(n){this._vy = n}
    get vy(){return this._vy}

    set enableGravity(bool){
        this._gravity = bool
        if(bool){
            this.vy > 10 ? this.vy = 10 : this.vy += 3 * (ticker.deltaMS / 1000)
            console.log(this.vy)
        }
    }
    get enableGravity(){return this._gravity}

    positionUpdate(){
        this.x += this._vx
        this.y += this._vy
        this.enableGravity = this._gravity
    }
}

function distanceAB(posA, posB){
    lengthX = posA.x - posB.x
    lengthY = posA.y - posB.y
    return Math.sqrt(Math.pow(lengthX,2) + Math.pow(lengthY,2))
}

function degreeTOrad(degree){
    return degree * (Math.PI / 180)
}

function updateTris(point){
    if(point.x != null){
        let rotation = Math.atan2(point.y - player.y, point.x - player.x)
        let distance = distanceAB(point, player) < 100 ? distanceAB(point, player) : 100
        let a = rotation + Math.PI
        let b = rotation + Math.PI/2
        let c = rotation
        let d = rotation - Math.PI/2
        
        let result = [
            {x:Math.cos(a) * 5 + player.x, y:Math.sin(a) * 5 + player.y},
            {x:Math.cos(b) * 15 + player.x, y:Math.sin(b) * 15 + player.y},
            {x:Math.cos(c) * distance + player.x, y:Math.sin(c) * distance + player.y},
            {x:Math.cos(d) * 15 + player.x, y:Math.sin(d) * 15 + player.y}
        ]
    
        tris.clear()
        tris.beginFill(0xA0A0A0)
        tris.drawPolygon(
            [
                result[0].x,result[0].y,
                result[1].x,result[1].y,
                result[2].x,result[2].y,
                result[3].x,result[3].y
            ]
        )
        tris.endFill()
    } else {
        tris.clear()
    }
}

function randomNum(max) {
    return Math.floor(Math.random() * max);
}

var player = new Entity()
    player.lineStyle(5, 0xFFFFFF, 1);
    player.beginFill(0x000000, 1);
    player.drawCircle(0, 0, 25);
    player.endFill();
    player.interactive = true;
    

var tris = new Entity()
    tris.lineStyle(0, 0x0F0F0F, 1)





