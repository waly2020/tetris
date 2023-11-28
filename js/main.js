updateParaLevels();
function animation(){
    animationFunctionId = requestAnimationFrame(animation); 
    update();
    draw();
}
function draw(){
    context.clearRect(0,0,width,height);
    contextNext.clearRect(0,0,canvasNext.width,canvasNext.height);
    contextBag.clearRect(0,0,canvasNext.width,canvasNext.height);
    drawBoard(context,boarde);
    drawTetra(context,currentTetra);
    drawForm(contextNext,randomForm[nextTetra]);
    drawForm(contextBag,bag);
    // drawText(context,"text exemple",(width/2) - 68,(height/2) - 16,32)
}
drawBoard(context,boarde);
function update(){
    timerToAnimeTetra++;
    delai(timerToAnimeTetra,30,() => {
        if(boarde.pieceCanMove(USERACTIONS[40](currentTetra))){
            currentTetra.move(USERACTIONS[40](currentTetra));
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
function clearTimer(id){
    clearInterval(id);
}