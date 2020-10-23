import { ModelI } from "../model.interface";


export interface CoachI {
    coachId: number
    teamId: number
    coachName: string
    coachValue: number
    coachNickname: string
}

export interface CoachSI extends ModelI{}