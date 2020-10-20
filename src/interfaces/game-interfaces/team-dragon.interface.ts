import { ModelI } from "../model.interface";


export interface TeamDragonI {
    teamMatchId: number
    firstDragon: boolean
    secondDragon: boolean
    soulDragon: number
    ancientDragon: number
}

export interface TeamDragonSI extends TeamDragonI, ModelI{}
