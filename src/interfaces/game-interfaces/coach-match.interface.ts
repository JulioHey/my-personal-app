import { ModelI } from "../model.interface";


export interface CoachMatchI {
    coach_match_id: number
    coach_id: number
    round_id: number
    match_id: number
    coach_value: number
    coach_pontuation: number
}

export interface CoachMatchSI extends ModelI{}