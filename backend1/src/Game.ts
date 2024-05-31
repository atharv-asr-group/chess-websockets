import { Chess } from "chess.js";
import { WebSocket } from "ws";
import { GAME_OVER, INIT_GAME, MOVE } from "./messages";

export class Game{
    public player1: WebSocket;
    public player2:WebSocket;
    public board: Chess;
    // private moves: string[];
    private startTime: Date;
    private movecount=0;



    constructor(player1: WebSocket, player2:WebSocket){
        this.player1=player1;
        this.player2=player2;
        this.board=new Chess();
        this.startTime=new Date();
        this.player1.send(JSON.stringify({
            type:INIT_GAME,
            payload:{
                color:"white"
            }
        }));
        this.player2.send(JSON.stringify({
            type:INIT_GAME,
            payload:{
                color:"black"
            }
        }));
    }
    makeMove(socket:WebSocket, move: {from:string;
         to:string;}){
        // validation, is it this user's move
        // is the move valid
        if(this.movecount%2===0 && socket!==this.player1){
            console.log('first earluy')
            return;
        }
        if(this.movecount%2===1 && socket!==this.player2){
            console.log('second early')
            return;
        }
        try{
            this.board.move(move);
            console.log('should have made the move')
            this.movecount++;
        }catch(e){
            console.log(e);
            return;
        }
        if(this.board.isGameOver()){
            // send this to both the players
            this.player1.send(JSON.stringify({
                type:GAME_OVER,
                payload:{
                    winner: this.board.turn() === 'w'?"black":"white"
                }
            }));
            this.player2.send(JSON.stringify({
                type:GAME_OVER,
                payload:{
                    winner: this.board.turn() === 'w'?"black":"white"
                }
            }));
            return;
        }
        if(this.movecount%2===1){
            console.log('move done')
            this.player2.send(JSON.stringify({
                type:MOVE,
                payload:move
            }))
        }
        else{
            console.log('move donee')
            this.player1.send(JSON.stringify({
                
                type:MOVE,
                payload:move
            }))
        }
        console.log('this is the move count, ',this.movecount)
        // this.movecount++;
        // update the board
        // push the move
        // check if the game is over
        // send the updated board to both players
    }
}