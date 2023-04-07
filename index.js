

function fullscreen(){
    gameframe = document.getElementById("gameframe")
    gamediv = document.getElementById("gamediv")

    if(!document.fullscreenElement){
        gameframe.requestFullscreen();
    } 
}
