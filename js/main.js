function animation(){
    animationFunctionId = requestAnimationFrame(animation); 
    update();
    draw();
}
// animation();
function draw(){
    context.clearRect(0,0,width,height);
    contextNext.clearRect(0,0,canvasNext.width,canvasNext.height);
    drawTetra(context,currentTetra);
    drawForm(contextNext,randomForm[nextTetra])
    drawBoard(context,boarde);
}
function update(){
    timerToAnimeTetra++;
    delai(timerToAnimeTetra,30,() => {
        if(boarde.pieceCanMove(moveTetra[40](currentTetra))){
            currentTetra.move(moveTetra[40](currentTetra));
        }
    });
    delai(timerToAnimeTetra,60,() =>{
        resPawn(currentTetra,boarde);
        deleteRow(boarde.board);
        gameOver(animationFunctionId,currentTetra,boarde);
    });
    
    if(timerToAnimeTetra >= 60){
        timerToAnimeTetra = 0;
    }
}