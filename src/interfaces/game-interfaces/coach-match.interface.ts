import { ModelI } from "../model.interface";


export interface CoachMatchI {
    coachMatchId: number
    coachId: number
    roundId: number
    teamMatchId: number
    coachValue: number
    coachPontuation: number
}

export interface CoachMatchSI extends CoachMatchI, ModelI{}