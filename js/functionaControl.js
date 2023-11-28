const USERACTIONS = {
    /**
     * Desincremente la position X de la piece
     * @param {Tetras} newPose Piece du jeux
     * @return {Tetras}} Copie de la piece.
     */
    37 : (newPose) =>(
        {...newPose, x : newPose.x - 1}
    ),
    /**
     * Incremente la position X de la piece
     * @param {Tetras} newPose 
     * @return {Tetras}} Copie de la piece.
     */
    39 : (newPose) =>(
        {...newPose, x : newPose.x + 1}
    ),
    /**
     * Applique une rotation a la piece.
     * @param {Tetras} newPose 
     * @return {Tetras}} Copie de la piece.
     */
    38 : (newPose) =>(
        rotateForm(newPose)
    ),
    /**
     * Applique une rotation inverse a la piece.
     * @param {Tetras} newPose 
     * @return {Tetras}} Copie de la piece.
     */
    73 : (newPose) =>(
        rotateInverseForm(newPose)
    ),
    /**
     * Incremente la position Y de la piece
     * @param {Tetras} newPose 
     * @return {Tetras}} Copie de la piece.
     */
    40 : (newPose) =>(
        {...newPose, y : newPose.y + 1}
    ),
    /**
     * Descente rapide
     * @param {Tetras} current 
     */
    32 : function(current){
        let i = 0;
        while(boarde.pieceCanMove(this[40](current)) && i <=  20){
            current.move(this[40](current));
            i++;
        }
    },
    /**
     * PAUSE/PALY
     */
    80 : function(){
        if(!play){
            timerPara.classList.add("active");
            timerPara.textContent = 3;
            timer(3,(statut) =>{
                timerPara.textContent = statut.timer;
                if(statut.end){
                    timerPara.classList.remove("active");
                    backgroundSound.play();
                    play = !play;
                    if(gameIsOver){
                        // gameIsOver = false;
                        // timerPara.classList.add("active");
                        // timerPara.textContent = "TAPE TO ESP";
                        resetGame(play);
                    }else{
                        animation();
                    }
                }
            })
        }else{
            play = !play;
            timerPara.textContent = "PAUSE";
            timerPara.classList.add("active");
            reseted = false;
            backgroundSound.pause();
            cancelAnimationFrame(animationFunctionId);
        }
    }
}
Object.freeze(USERACTIONS);