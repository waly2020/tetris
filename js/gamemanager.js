/**
 * @constant {name:String}
 */
const moveTetra = {
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
    80 : function(){
        if(!play){
            animation();
        }else{
            cancelAnimationFrame(animationFunctionId);
        }
        play = !play;
    },
    82 : function(){
        boarde.resetBoard();
    }
}
Object.freeze(moveTetra);


document.addEventListener("keyup",(e)=>{
    let code = e.keyCode;
    console.log(code);
    if(moveTetra[code]){
        if(code >= 37 && code <= 40){
            if(boarde.pieceCanMove(moveTetra[code](currentTetra))){
                currentTetra.move(moveTetra[code](currentTetra));
            }
        }else if(code == 32){
            moveTetra[code](currentTetra);
        }else{
            moveTetra[code]();
        }
    }
    // console.table(boarde.board);
})
/**
 * 
 * @param {Tetras} tetras 
 * @param {Board} board 
 */
function resPawn(tetras,board){
    if(!board.pieceCanMove(moveTetra[40](tetras))){
        freeze(tetras,board.board);
        tetras.forme = randomForm[nextTetra];
        tetras.color = COLORS[nextTetra + 1];
        tetras.y = 0;
        tetras.x = 3;
        nextTetra = getRandomNumber(randomForm.length);
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
            boarde.unshift(Array(paramTetra.column).fill(0));
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
    if(!board.pieceCanMove(moveTetra[40](currentTetra)) && currentTetra.y <= 2){
        cancelAnimationFrame(animationId);
        console.log("GameOver");
        // board.resetBoard();
    }
}
