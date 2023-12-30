document.addEventListener("keydown",(e)=>{
    e.preventDefault();
    let code = e.keyCode;
    // deplacement X,+Y
    aplayEvents(e,[37,39,73],play,() =>{
        if(boarde.pieceCanMove(USERACTIONS[code](currentTetra))){
            currentTetra.move(USERACTIONS[code](currentTetra));
            palyMove();
        }
    });
    // DESCENTE DOUCE
    aplayEvents(e,[40],play,() =>{
        if(boarde.pieceCanMove(USERACTIONS[code](currentTetra))){
            levels.score += 1;
            updateParaLevels();
            currentTetra.move(USERACTIONS[code](currentTetra));
            palyMove();
        }
    })
    // rotation normal
    aplayEvents(e,["ArrowUp",88,35,12,33],play,() =>{
        if(boarde.pieceCanMove(USERACTIONS[38](currentTetra))){
            currentTetra.move(USERACTIONS[38](currentTetra));
            palyMove();
        }
    })
    // PAUSE/PLAY
    aplayEvents(e,[80,112,91],true,() =>{
        USERACTIONS[80]();
    })
    // Descente rapide
    aplayEvents(e,[32,"Numpad8"],play,() =>{
        USERACTIONS[32](currentTetra);
        playHardDrop();
    })
    // add to bag
    aplayEvents(e,["ShiftLeft","KeyC"],play,() =>{
        if(activeBag){
            bag = currentTetra.forme;
            currentTetra.forme = randomForm[Math.floor(Math.random() * randomForm.length)]
            currentTetra.y = 0;
            activeBag = false;
        }
    })
    // restart game
    aplayEvents(e,["Escape"],true,() =>{
        resetGame();
    })
})

btnPlayPause.addEventListener("click",() =>{
    USERACTIONS[80]();
})
/**
 * 
 * @param {Tetras} tetras 
 * @param {Board} board 
 */
function resPawn(tetras,board){
    if(!board.pieceCanMove(USERACTIONS[40](tetras))){
        freeze(tetras,board.board);
        tetras.forme = randomForm[nextTetra];
        tetras.color = COLORS[nextTetra + 1];
        tetras.y = 0;
        tetras.x = 3;
        nextTetra = getRandomNumber(randomForm.length);
        activeBag = true;
        bag = [];
        // console.table(board.board);
    }
}
/**
 * @param {[[1 | 0]]} boarde
 */
function deleteRow(boarde){
    for(let i = 0; i < boarde.length; i++){
        let rowFilled = boarde[i].every(val => val >= 1);
        if(rowFilled){
            destroy(boarde[i],boarde);
            levels.line += 1;
            levels.level = Math.floor(levels.line/levels.target);
            updateParaLevels();
            boarde.unshift(Array(paramTetra.column).fill(0));
            playCleanLine();
        }
    }
}
/**
 * 
 * @param {number} animationId 
 * @param {Tetras} currentTetra 
 * @param {Board} board 
 */
function gameOver(animationId,currentTetra,board){
    if(!board.pieceCanMove(USERACTIONS[40](currentTetra)) && currentTetra.y <= 2){
        timerPara.classList.add("active");
        timerPara.textContent = "Game Over";
        draw();
        play = false;
        gameIsOver = true;
        playGameOver();
        cancelAnimationFrame(animationId);
        // board.resetBoard();
    }
}
function resetGame(gameCanMove = false){
    gameIsOver = false;
    levels.score = 0;
    levels.line = 0;
    levels.level = 0;
    bag = [];
    currentTetra.forme = randomForm[getRandomNumber(randomForm.length)];
    nextTetra = getRandomNumber(randomForm.length);
    currentTetra.x = 3;
    currentTetra.y = 0;
    updateParaLevels();
    play = gameCanMove;
    reseted = true;
    boarde.board = boarde.getEmptyBoard();
    draw();
    update();
    if(gameCanMove){
        backgroundSound.play();
    }else{
        playGameOver();
    }
    if(!gameCanMove){
        timerPara.textContent = "GAME OVER";
        timerPara.classList.add("active");
    }
    if(gameCanMove){
        animation();
    }else{
        cancelAnimationFrame(animationFunctionId);
    }
}