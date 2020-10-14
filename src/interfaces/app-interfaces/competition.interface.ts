import { ModelI } from "../model.interface";


export interface CompetitionI {
    competitionId: string
    competitionName: string
    competitionOwner: string
}

export interface CompetitionSI extends ModelI{}