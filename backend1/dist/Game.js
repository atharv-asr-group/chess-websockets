"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const chess_js_1 = require("chess.js");
const messages_1 = require("./messages");
class Game {
    constructor(player1, player2) {
        this.movecount = 0;
        this.player1 = player1;
        this.player2 = player2;
        this.board = new chess_js_1.Chess();
        this.startTime = new Date();
        this.player1.send(JSON.stringify({
            type: messages_1.INIT_GAME,
            payload: {
                color: "white"
            }
        }));
        this.player2.send(JSON.stringify({
            type: messages_1.INIT_GAME,
            payload: {
                color: "black"
            }
        }));
    }
    makeMove(socket, move) {
        // validation, is it this user's move
        // is the move valid
        if (this.movecount % 2 === 0 && socket !== this.player1) {
            console.log('first earluy');
            return;
        }
        if (this.movecount % 2 === 1 && socket !== this.player2) {
            console.log('second early');
            return;
        }
        try {
            this.board.move(move);
            console.log('should have made the move');
            this.movecount++;
        }
        catch (e) {
            console.log(e);
            return;
        }
        if (this.board.isGameOver()) {
            // send this to both the players
            this.player1.send(JSON.stringify({
                type: messages_1.GAME_OVER,
                payload: {
                    winner: this.board.turn() === 'w' ? "black" : "white"
                }
            }));
            this.player2.send(JSON.stringify({
                type: messages_1.GAME_OVER,
                payload: {
                    winner: this.board.turn() === 'w' ? "black" : "white"
                }
            }));
            return;
        }
        if (this.movecount % 2 === 1) {
            console.log('move done');
            this.player2.send(JSON.stringify({
                type: messages_1.MOVE,
                payload: move
            }));
        }
        else {
            console.log('move donee');
            this.player1.send(JSON.stringify({
                type: messages_1.MOVE,
                payload: move
            }));
        }
        console.log('this is the move count, ', this.movecount);
        // this.movecount++;
        // update the board
        // push the move
        // check if the game is over
        // send the updated board to both players
    }
}
exports.Game = Game;
