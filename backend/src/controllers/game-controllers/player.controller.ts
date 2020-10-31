import { autoInjectable, delay, inject } from "tsyringe";
import {PlayerService} from "../../services/game-services/player.service";
import BaseController from "../base.controller";

@autoInjectable()
export class PlayerController extends BaseController {

    constructor(@inject(delay(() => PlayerService)) public PlayerService: PlayerService) {
        super(PlayerService)
    }
}