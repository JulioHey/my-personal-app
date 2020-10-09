import { autoInjectable, delay, inject } from "tsyringe";
import {TeamMatchService} from "../../services/game-services/team-match.service";
import BaseController from "../base.controller";

@autoInjectable()
export class TeamMatchController extends BaseController {

    constructor(@inject(delay(() => TeamMatchService)) public TeamMatchService: TeamMatchService) {
        super(TeamMatchService)
    }

}