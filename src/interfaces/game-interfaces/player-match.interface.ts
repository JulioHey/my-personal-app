import { ModelI } from "../model.interface";


export interface PlayerMatchI {
    playerMatchId: number
    playerId: number
    matchId: number
    championId: number
    playerPoints: number
}

export default interface PlayerMatchSI extends ModelI{}
