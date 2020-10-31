import { ModelI } from "../model.interface";


export interface MatchI{
    matchId: number
    blueSideTeam: number
    redSideTeam: number
    roundId: number
    matchPosition: number
}

export interface MatchSI extends ModelI{}