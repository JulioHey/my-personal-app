import { ModelI } from "../model.interface";


export interface UserCompetitionI{
    userCompetitionID: string
    competitionId: string
    userId: string
    userCompetitionPontuation: number
}

export interface UserCompetitionSI extends ModelI{}