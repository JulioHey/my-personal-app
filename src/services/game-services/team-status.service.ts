import { injectable } from "tsyringe";
import { TeamStatusSI } from "../../interfaces/game-interfaces/team-status.interface";
import { TeamStatusRepo } from "../../models/game-models/team-status.model";
import BaseService from "../base.service";


@injectable()
export class TeamStatusService extends BaseService<TeamStatusSI>{

    constructor(modelI?: TeamStatusRepo) {
        super(modelI)
    }
}