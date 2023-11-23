function freeze(piece,board) {
    piece.forme.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          board[y + piece.y][x + piece.x] = value;
        }
      });
    });
}
/**
 * 
 * @param {CanvasRenderingContext2D} context 
 * @param {Tetras} tetra 
 */
function drawTetra(context,tetra){
  for(let y = 0; y < tetra.forme.length; y++){
      let col = tetra.forme[y];
      for(let x = 0; x < col.length; x++){
          let value = col[x];
          if(value){
              context.beginPath();
              context.fillStyle = tetra.color;
              context.fillRect(tetra.x + x,tetra.y + y,1,1);
              context.closePath();
          }
      }
  }
}
/**
 * 
 * @param {CanvasRenderingContext2D} context 
 * @param {[[number]]} form 
 */
function drawForm(context,form){
  for(let y = 0; y < form.length; y++){
    let row = form[y];
    for(let x = 0; x < row.length; x++){
      let value = row[x];
      if(value){
        context.beginPath();
        context.fillStyle = COLORS[value];
        context.fillRect(x,y,1,1);
        context.closePath();
      }
    }
  }
}
/**
 * 
 * @param {CanvasRenderingContext2D} context 
 * @param {[Tetras]} arrayTetras 
 */
function drawTetraInArray(context,arrayTetras){
    for(let i = 0; i < arrayTetras.length; i++){
        drawTetra(context,arrayTetras[i]);
    }
}
/**
 * Obtenir une couleur rgb aleatoire
 * @returns {String}
 */
function randomColor(){
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
}
/**
 *
 * @param {Tetras} form Tetromino
 * @return {Tetras} copy de la piece.
 */
function rotateForm(tetra) {
  let copy = JSON.parse(JSON.stringify(tetra));
  for (let y = 0; y < copy.forme.length; ++y) {
    for (let x = 0; x < y; ++x) {
      [copy.forme[x][y], copy.forme[y][x]] = [copy.forme[y][x], copy.forme[x][y]];
    }
  }
  copy.forme.forEach((row) => row.reverse());
  return copy;
}
/**
 * 
 * @param {[Tetras]} tetras 
 * @param {Board} board 
 */
function freezeTetraArray(tetras,board){
  for(let i = 0; i < tetras.length; i++){
    freeze(tetras[i],board.board);
  }
}
/**
 * Avoir un nombre aleatoire sur une interval de 0 a x
 * @param {number} x max random number
 * @returns {number} random number
 */
function getRandomNumber(x){
  return Math.floor(Math.random() * x);
}
/**
 * 
 * @param {Board | Tetras | []} item 
 * @param {[Tetras] | [Board] | [number]} arrayOfItem 
 */
function destroy(item,arrayOfItem){
  arrayOfItem.splice(arrayOfItem.indexOf(item),1);
}
/**
 * 
 * @param {Board} board 
 * @param {CanvasRenderingContext2D} context
 */
function drawBoard(context,board){
  for(let y = 0; y < board.board.length; y++){
    let row = board.board[y];
    for(let x = 0; x < row.length; x++){
      let value = row[x];
      if(value){
        context.beginPath();
        context.fillStyle = COLORS[value];
        context.fillRect(x,y,1,1);
        context.closePath();
      }
    }
  }
}
/**
 * 
 * @param {number} currentTime Timer
 * @param {number} timeToStart Moment d'appel de la fonction
 * @param {() => void} callback Callbac d'appel
 */
function delai(currentTime,timeToStart,callback){
  if(currentTime === timeToStart){
    callback();
  }
}