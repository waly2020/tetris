const backgroundSound = new Audio("../assets/tetris.mp3");
backgroundSound.loop = true;
backgroundSound.volume = 0.6;

function palyMove(){
    let move = new Audio("../assets/move.wav");
    move.play();
}
function playHardDrop(){
    let hardSound = new Audio("../assets/bottom.wav");
    hardSound.play();
}
function playCleanLine(){
    let cleanSound = new Audio("../assets/clean_line_1.wav");
    cleanSound.play();
}
function playGameOver(){
    let gameOverSound = new Audio("../assets/game_over.wav");
    backgroundSound.pause();
    gameOverSound.play();
}