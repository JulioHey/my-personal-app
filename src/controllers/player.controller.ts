import { autoInjectable, delay, inject } from "tsyringe";
import PlayerService from "../services/player.service";
import BaseController from "./base.controller";

@autoInjectable()
export default class ChampionController extends BaseController {

    constructor(@inject(delay(() => PlayerService)) public PlayerService: PlayerService) {
        super(PlayerService)
    }
}