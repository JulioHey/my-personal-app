import { injectable } from "tsyringe";
import PlayerSI from "../interfaces/player.interfaces";

import { PlayerRepo } from "../models/player.model";
import BaseService from "./base.service";


@injectable()
export default class PlayerService extends BaseService<PlayerSI>{
    
    constructor(modelI?: PlayerRepo){
        super(modelI)
    }
}

