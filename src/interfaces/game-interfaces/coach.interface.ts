import { ModelI } from "../model.interface";


export interface CoachI {
    coach_id: number
    team_id: number
    coach_name: string
    coach_value: number
    coach_nickname: string
}

export interface CoachSI extends ModelI{}