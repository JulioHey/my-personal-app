import {ModelI} from "./model.interface";


export interface PlayerI{
    playerName: string
    playerId: number
    playerPosition: string
    playerTeamId: number
}

export default interface PlayerSI extends ModelI{}