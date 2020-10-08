import { injectable } from "tsyringe";
import ChampionSI from "../../interfaces/game-interfaces/champion.interface";

import { ChampionRepo } from "../../models/game-models/champion.model";
import BaseService from "../base.service";


@injectable()
export default class ChampionService extends BaseService<ChampionSI>{
    
    constructor(modelI?: ChampionRepo){
        super(modelI)
    }
}
