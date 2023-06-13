import { isWebTarget } from 'webpack-dev-server';
import {Ship,Gameboard} from './battleship'
const board = new Gameboard();
const cruiser = new Ship('cruiser',3,2,2);

it('expect ship hit to increase', () => {
    cruiser.hits();
    expect(cruiser.hit).toBe(1)});

it('inserting a ship into the gameboard', () => {
    board.insertShip(cruiser);
    expect(board.grid[2][3]).toBe('cruiser');
});
it('expect hit on the gameboard', () => {
    board.insertShip(cruiser)
    board.receieveAttack(2,2)
    board.receieveAttack(2,3)
    expect(board.grid[2][3]).toBe('H')});
