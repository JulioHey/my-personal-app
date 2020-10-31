import {ModelI} from "../model.interface";


export interface PlayerI{
    playerName: string
    playerId: number
    playerPosition: string
    playerTeamId: number
    playerNickname: string
    playerValue: number
}

export interface PlayerSI extends ModelI{}