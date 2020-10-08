import { ModelI } from "../model.interface";


interface TeamMatchI{
    teamMatchId: number
    teamId: number
    matchId: number
    firstBan: number
    secondBan: number
    thirdBan: number
    matchStatus: string
}

interface TeamMatchSI extends ModelI{}

export {TeamMatchI, TeamMatchSI}