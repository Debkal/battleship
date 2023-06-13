import {Gameboard, Ship} from './battleship.js'

const cruiser = new Ship('cruiser',3,2,2);
const battleship = new Ship('battleship',5,4,4);
const board = new Gameboard();
cruiser.hits();
cruiser.isSunk();
board.notHorizontal();
console.log(cruiser.sunk);
console.log(cruiser.length);
console.log(board.insertShip(cruiser));


console.log(board.grid[2][3]); // horizontal
board.receieveAttack(2,3);
console.log(board.grid);
console.log(board.ships);
/*
console.log(board.grid[2][3]); // vertical
board.receieveAttack(2,4);
console.log(cruiser.hit);
console.log(board.grid);
*/
