import { autoInjectable, delay, inject } from "tsyringe";
import {MatchDragonService} from "../../services/game-services/match-dragon.service";
import BaseController from "../base.controller";

@autoInjectable()
export class MatchDragonController extends BaseController {

    constructor(@inject(delay(() => MatchDragonService)) public MatchDragonService: MatchDragonService) {
        super(MatchDragonService)
    }
}