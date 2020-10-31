import { autoInjectable, delay, inject } from "tsyringe";
import {PlayerStatusService} from "../../services/game-services/player-status.service";
import BaseController from "../base.controller";

@autoInjectable()
export class PlayerStatusController extends BaseController {

    constructor(@inject(delay(() => PlayerStatusService)) public PlayerStatusService: PlayerStatusService) {
        super(PlayerStatusService)
    }
}