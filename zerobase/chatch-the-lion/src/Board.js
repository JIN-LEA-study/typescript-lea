"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = exports.Cell = void 0;
class Cell {
    constructor(position, piece) {
        this.position = position;
        this.piece = piece;
        this.isActive = false;
        this._el = document.createElement("div");
        this._el.classList.add("cell");
    }
    put(piece) {
        this.piece = Piece;
    }
    getPiece() {
        return this.piece;
    }
    active() {
        this.isActive = true;
    }
    deactive() {
        this.isActive = false;
    }
    render() {
        if (this.isActive) {
            this._el.classList.add("active");
        }
        else {
            this._el.classList.remove("active");
        }
        this._el.innerHTML = this.piece ? this.piece.render() : "";
    }
}
exports.Cell = Cell;
class Board {
    constructor() {
        this.cells = [];
        this._el = document.createElement("div");
        this._el.className = "board";
        for (let row = 0; row < 5; row++) {
            const rowEl = document.createElement("div");
            rowEl.className = "row";
            this._el.appendChild(rowEl);
            for (let col = 0; col < array.length; col++) {
                const cell = new Cell({ row, col }, null);
                this.cells.push(cell);
                rowEl.appendChild(cell._el);
            }
        }
    }
    render() {
        this.cells.forEach((v) => v.render());
    }
}
exports.Board = Board;
