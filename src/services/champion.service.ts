import { injectable } from "tsyringe";
import ChampionSI from "../interfaces/champion.interface";

import { ChampionRepo } from "../models/champion.model";
import BaseService from "./base.service";


@injectable()
export default class ChampionService extends BaseService<ChampionSI>{
    
    constructor(modelI?: ChampionRepo){
        super(modelI)
    }
}
