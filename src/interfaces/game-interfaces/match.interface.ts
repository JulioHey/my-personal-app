import { ModelI } from "../model.interface";


export interface MatchI{
    matchId: number
    blueSideTeam: number
    redSideTeam: number
    roundId: number
}

export default interface MatchSI extends ModelI{}