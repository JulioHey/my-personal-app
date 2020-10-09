import { ModelI } from "../model.interface";


export interface TeamStatusI {
    teamMatchId: number
    teamTowers: number
    teamBarricades: number
    teamBarons: number
}

export interface TeamStatusSI extends TeamStatusI, ModelI{}