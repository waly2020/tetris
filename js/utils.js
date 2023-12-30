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
            context.fillStyle = COLORS[value];
            context.fillRect((tetra.x + x) * tetra.square,(tetra.y + y) * tetra.square,tetra.square,tetra.square);
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
function drawForm(context,form,square = 30){
for(let y = 0; y < form.length; y++){
  let row = form[y];
  for(let x = 0; x < row.length; x++){
    let value = row[x];
    if(value){
      context.beginPath();
      context.fillStyle = COLORS[value];
      context.fillRect(x * square,y * square,square,square);
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
* Rotation dans le sens normal des aiguilles d'une montre
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
* Rotation dans le sens inversw des aiguilles d'une montre
* @param {Tetras} form Tetromino
* @return {Tetras} copy de la piece.
*/
function rotateInverseForm(tetra) {
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
function drawBoard(context,board,square = 30){
for(let y = 0; y < board.board.length; y++){
  let row = board.board[y];
  for(let x = 0; x < row.length; x++){
    let value = row[x];
    if(value){
      context.beginPath();
      context.fillStyle = COLORS[value];
      context.fillRect(x * square,y * square,square,square);
      context.closePath();
    }else{
      context.beginPath();
      context.strokeStyle = "#eee";
      context.strokeRect(x * square,y * square,square,square);
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
/**
* 
* @param {[number]} keyCodes 
* @param {KeyboardEvent} event
* @param {boolean} canAply
* @param {() => void} callback 
*/
function aplayEvents(event,keyCodes,canAply,callback){
if(keyCodes.includes(event.keyCode) || keyCodes.includes(event.code)){
  if(canAply){
    callback();
  }
}
}

/**
* dessiné du texte
* @param {CanvasRenderingContext2D} context
**/
function drawText(context,text = "new text",x = 0,y = 0,size = 16,color = "#000"){
context.beginPath();
context.font = `${size}px serif`;
context.fillStyle = `${color}`
context.fillText(`${text}`,x,y + size);
context.closePath();
}
function updateParaLevels(){
levelHtml.forEach(para =>{
  para.textContent = levels[para.classList[1]];
})
}

/**
* 
* @param {number} timer 
* @param {function({timer : number,end : boolean})} callback 
*/
function timer(timer,callback){
let statut = {
  timer : timer,
  end : false
}
let id = setInterval(() =>{
    statut.timer--;
    
    if(statut.timer <= 0){
        statut.end = true;
        callback(statut);
        clearInterval(id);
    }else{
      callback(statut);
    }
},1000);
}