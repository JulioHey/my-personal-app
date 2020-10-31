import { autoInjectable, delay, inject } from "tsyringe";
import { TeamDragonService } from "../../services/game-services/team-dragon.service";
import BaseController from "../base.controller"


@autoInjectable()
export class TeamDragonController extends BaseController {

    constructor(@inject(delay(() => TeamDragonService)) public TeamDragonService: TeamDragonService) {
        super(TeamDragonService)
    }
}