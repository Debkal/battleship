import {Gameboard, Ship} from './battleship.js'

const cruiser = new Ship(3);
const battleship = new Ship(5);
const board = new Gameboard();
cruiser.hits();
cruiser.isSunk();
board.notHorizontal();
console.log(cruiser.sunk);
console.log(cruiser.length);
console.log(board.insertShip(cruiser,2,2));
console.log(board.grid[3][2]); // horizontal
board.receieveAttack(2,3);
console.log(board.grid[2][3]); // vertical
board.receieveAttack(2,4);
console.log(cruiser.hit);
