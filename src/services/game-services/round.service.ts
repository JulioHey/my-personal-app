import { injectable } from "tsyringe";

import RoundSI from "../../interfaces/game-interfaces/round.interface";
import {RoundRepo} from "../../models/game-models/round.model";
import BaseService from "../base.service";


@injectable()
export default class RoundService extends BaseService<RoundSI>{
    
    constructor(modelI?: RoundRepo){
        super(modelI)
    }
}
