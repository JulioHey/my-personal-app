import { autoInjectable, delay, inject } from "tsyringe";
import {Request, Response} from 'express';
import {TeamMatchService} from "../../services/game-services/team-match.service";
import BaseController from "../base.controller";

@autoInjectable()
export class TeamMatchController extends BaseController {

    constructor(@inject(delay(() => TeamMatchService)) public TeamMatchService: TeamMatchService) {
        super(TeamMatchService)
    }
    
    count = async(request: Request, response: Response) => {
        try {
            const {id} = request.params;
            const {roundId} = request.body;

            const Bans = await this.TeamMatchService.countBans(roundId, Number(id));

            return response.json({Bans})
        } catch(err) {
            return response.json({err})
        }
    }

}