const renderer = new PIXI.Renderer({
    antialias:true,
    width:window.screen.width,
    height:window.screen.height,
    backgroundColor:0x010101,
})


// renderer.resize(window.screen.width, window.screen.height);

$('body').prepend(renderer.view)


to_render = gameplay


ticker.add((a)=> {
    renderer.render(to_render);
    // player.positionUpdate()
    enemyUpdate()
    enemyUpdate2()
    gameplay.children.forEach(item => {
        item.positionUpdate()
        if (item.y > window.screen.height*3/2){
            item.destroy()
        }
    });
    updateTris(pointerpos)
    // console.log(a)
})

ticker.start()

