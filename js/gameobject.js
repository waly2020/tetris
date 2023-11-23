class Tetras {
    /**
     * Cree un nouveau tetra
     * @param {number} x Position X du tetra
     * @param {number} y Position Y du tetra
     * @param {[[number]]} forme Cordonnees de la forme a dessine
     * @param {string} color Couleur du tetra
     */
    constructor(x,y,forme,color){
        this.x = x;
        this.y = y;
        this.forme = forme;
        this.color = color;
    }
    /**
     * 
     * @param {CanvasRenderingContext2D} context 
     */
    draw(context){
        for(let y = 0; y < this.forme.length; y++){
            let col = this.forme[y];
            for(let x = 0; x < col.length; x++){
                let value = col[x];
                if(value){
                    context.beginPath();
                    context.fillStyle = this.color;
                    context.fillRect(this.x + x,this.y + y,1,1);
                    context.closePath();
                }
            }
        }
    }
    /**
     * Deplace une piece
     * @param {Tetras} newPose 
     */
    move(newPose){
        this.x = newPose.x;
        this.y = newPose.y;
        this.forme = newPose.forme;
    }
}
class Board {
    constructor(column,row){
        this.column = column;
        this.row = row;
    }
    resetBoard(){
        this.board = this.getEmptyBoard();
    }
    getEmptyBoard(){
        return Array.from({length : this.row},() => Array(this.column).fill(0));
    }
    pieceCanMoveX(newPoseX){
        return newPoseX >= 0 && newPoseX < paramTetra.column;
    }
    pieceCanMoveY(newPoseY){
        return newPoseY <= (paramTetra.row/2) - 1;
    }
    notOccupied(x, y) {
        // console.log(this.board[y][x] == 0);
        return this.board[y] && this.board[y][x] === 0;
      }
    /**
     * Verifie si une piece peut aller dans une position.
     * @param {Tetras} newPose Futur position de la piece
     * @return {boolean}
     */
    pieceCanMove(newPose){
        return newPose.forme.every((rows,dy) =>{
            return rows.every((value,dx) =>{
                let x = newPose.x + dx;
                let y = newPose.y + dy;
                return (
                    value === 0 || this.pieceCanMoveY(y) && this.pieceCanMoveX(x) && this.notOccupied(x,y)
                );
            })
        })
    }
}