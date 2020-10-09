import { autoInjectable, delay, inject } from "tsyringe";
import {TeamService} from "../../services/game-services/team.service";
import BaseController from "../base.controller";

@autoInjectable()
export class TeamController extends BaseController {

    constructor(@inject(delay(() => TeamService)) public TeamService: TeamService) {
        super(TeamService)
    }
}