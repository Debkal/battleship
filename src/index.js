import {Gameboard, Ship} from './battleship.js'
const cruiser = new Ship(3);
const board = new Gameboard(2,2);
cruiser.hits();
cruiser.isSunk();
console.log(cruiser.sunk);
console.log(board.createBoard());
console.log(board.insertShip(cruiser));
board.notHorizontal();
console.log(board);