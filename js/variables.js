const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const canvasNext = document.getElementById("canvasNext");
const contextNext = canvasNext.getContext("2d");

const paramTetra = {
    square : 30,
    tetras : function (){
        return this.square * 3;
    },
    column : 10,
    row : 40
}
Object.freeze(paramTetra);

canvasNext.width = paramTetra.square * 4;
canvasNext.height = paramTetra.square * 4;

canvas.width = paramTetra.square * paramTetra.column;
canvas.height = paramTetra.square * paramTetra.row/2;
const {width,height} = canvas;
context.scale(paramTetra.square,paramTetra.square);
contextNext.scale(paramTetra.square,paramTetra.square);

const COLORS = {
    1 : "maroon",
    2 : "cyan",
    3 : "blue",
    4 : "orange",
    5 : "yellow",
    6 : "green",
    7 : "purple",
}
const randomForm = [
    [
        [1,1,1],
        [0,1,0],
        [0,0,0],
    ],
    [
        [0,0,2],
        [0,0,2],
        [0,2,2],
    ],
    [
        [3,0,0],
        [3,0,0],
        [3,3,0],
    ],
    [
        [4,4,0],
        [0,4,4],
        [0,0,0],
    ],
    [
        [0,5,5],
        [5,5,0],
        [0,0,0],
    ],
    [
        [0,0,6,0,0],
        [0,0,6,0,0],
        [0,0,6,0,0],
        [0,0,6,0,0],
        [0,0,0,0,0],
    ],
    [
        [0,0,0,0],
        [0,7,7,0],
        [0,7,7,0],
        [0,0,0,0],
    ]
];
let boarde = new Board(paramTetra.column,paramTetra.row);
boarde.resetBoard();

const startTetra = getRandomNumber(randomForm.length);
let nextTetra = getRandomNumber(randomForm.length);
let currentTetra = new Tetras(3,-1,randomForm[startTetra],COLORS[startTetra + 1]);
let animationFunctionId = 0;
let timerToAnimeTetra = 0;
let play = false;