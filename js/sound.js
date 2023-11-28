const backgroundSound = new Audio("../assets/sounds/tetris.mp3");
backgroundSound.loop = true;
backgroundSound.volume = 0.6;

function palyMove(){
    let move = new Audio("../assets/sounds/move.wav");
    move.play();
}
function playHardDrop(){
    let hardSound = new Audio("../assets/sounds/bottom.wav");
    hardSound.play();
}
function playCleanLine(){
    let cleanSound = new Audio("../assets/sounds/clean_line_1.wav");
    cleanSound.play();
}
function playGameOver(){
    let gameOverSound = new Audio("../assets/sounds/game_over.wav");
    backgroundSound.pause();
    gameOverSound.play();
}