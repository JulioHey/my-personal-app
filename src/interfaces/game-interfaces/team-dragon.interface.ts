import { ModelI } from "../model.interface";
import { DragonType } from "./match-dragon.interface";


export interface TeamDragonI {
    teamMatchId: number
    firstDragon: DragonType
    secondDragon: DragonType
    soulDragon: DragonType
    ancientDragon: number
}

export interface TeamDragonSI extends TeamDragonI, ModelI{}
