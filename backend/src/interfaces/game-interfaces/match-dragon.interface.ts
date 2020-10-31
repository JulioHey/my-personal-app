import { ModelI } from "../model.interface";


export enum DragonType {
    "wind",
    "fire",
    "mountain",
    "ocean"
}

export interface MatchDragonsI{
    matchId: number
    firstDragon: DragonType
    secondDragon: DragonType
    soulDragon: DragonType
}

export interface MatchDragonsSI extends MatchDragonsI, ModelI{}