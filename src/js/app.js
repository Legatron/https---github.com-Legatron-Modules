// TODO: write your code here
import sum from './basic';
import Game, { GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from './game.js'

console.log('worked');
console.log(sum([1, 2, 5, 7]));

const game = new Game();
game.start();