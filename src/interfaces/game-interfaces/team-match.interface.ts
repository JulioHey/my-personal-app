import { ModelI } from "../model.interface";

export enum Status {
    "inGame",
    "future",
    "win",
    "lost"
}

export interface TeamMatchI{
    teamMatchId: number
    teamId: number
    matchId: number
    firstBan: number
    secondBan: number
    thirdBan: number
    matchStatus: Status
}

export interface TeamMatchSI extends ModelI{}
