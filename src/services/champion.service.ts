import { injectable } from "tsyringe";
import ChampionSI from "../interfaces/champion.interface";

import RoundSI from "../interfaces/round.interface";
import { ChampionRepo } from "../models/champion.model";
import {RoundRepo} from "../models/round.model";
import BaseService from "./base.service";


@injectable()
export default class ChampionService extends BaseService<ChampionSI>{
    
    constructor(modelI?: ChampionRepo){
        super(modelI)
    }
}
