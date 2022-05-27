"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const Board_1 = require("./Board");
class Game {
    constructor() {
        this.board = new Board_1.Board();
        const boardContainer = document.querySelector(".board-container");
        boardContainer.firstChild.remove();
        boardContainer.appendChild(this.board._el);
    }
}
exports.Game = Game;
