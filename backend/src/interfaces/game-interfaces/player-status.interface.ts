import { ModelI } from "../model.interface";


export interface PlayerStatusI {
    playerMatchId: number
    playerKills: number
    playerDeaths: number
    playerAssists: number
    playerMinions: number
    playerVision: number
    playerGold: number
}

export interface PlayerStatusSI extends ModelI{}