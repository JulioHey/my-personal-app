import { ModelI } from "../model.interface";


export interface PlayerMatchI {
    playerMatchId: number
    playerId: number
    matchId: number
    roundId: number
    championId: number
    playerPoints: number
}

export interface PlayerMatchSI extends ModelI{}
