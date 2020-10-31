import { autoInjectable, delay, inject } from "tsyringe";
import {PlayerMatchService} from "../../services/game-services/player-match.service";
import BaseController from "../base.controller";

@autoInjectable()
export class PlayerMatchController extends BaseController {

    constructor(@inject(delay(() => PlayerMatchService)) public PlayerMatchService: PlayerMatchService) {
        super(PlayerMatchService)
    }

}