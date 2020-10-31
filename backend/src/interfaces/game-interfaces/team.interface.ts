import {ModelI} from "../model.interface";


export interface TeamI{
    teamName: string
    teamId: number
    teamPosition: number
}

export interface TeamSI extends TeamI, ModelI{}