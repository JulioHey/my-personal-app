import { injectable } from "tsyringe";
import {MatchDragonsSI} from "../../interfaces/game-interfaces/match-dragon.interface";

import { MatchDragonRepo } from "../../models/game-models/match-dragon.model";
import BaseService from "../base.service";


@injectable()
export class MatchDragonService extends BaseService<MatchDragonsSI>{
    
    constructor(modelI?: MatchDragonRepo){
        super(modelI)
    }
}
