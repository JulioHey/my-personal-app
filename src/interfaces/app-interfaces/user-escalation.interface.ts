import { ModelI } from "../model.interface";


export interface UserEscalationI {
    userEscaltionId: string
    userId: string
    roundId: number
    coach_id: number
    toplaner: number
    jungler: number
    midlaner: number
    adcarry: number
    support: number
    firstBan: number
    secondBan: number
    thirdBan: number
    userPontuation: number
}

export interface UserEscalationSI extends ModelI{}