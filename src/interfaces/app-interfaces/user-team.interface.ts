import { ModelI } from "../model.interface";


export interface UserTeamI {
    userId: string
    userTeamName: string
    userTeamCoachName: string
    userTeamPatrimony: number
}

export interface UserTeamSI extends UserTeamI, ModelI{}