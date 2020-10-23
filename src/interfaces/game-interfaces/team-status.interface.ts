import { ModelI } from "../model.interface";


export interface TeamStatusI {
    teamMatchId: number
    teamTowers: number
    teamBarricades: number
    teamBarons: number
    teamDragons: number
}

export interface TeamStatusSI extends TeamStatusI, ModelI{}