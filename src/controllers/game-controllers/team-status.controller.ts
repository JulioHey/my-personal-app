import { autoInjectable, delay, inject } from "tsyringe";
import { TeamStatusService } from "../../services/game-services/team-status.service";
import BaseController from "../base.controller"


@autoInjectable()
export class TeamStatusController extends BaseController {

    constructor(@inject(delay(() => TeamStatusService)) public TeamStatusService: TeamStatusService) {
        super(TeamStatusService)
    }
}