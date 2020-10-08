import { autoInjectable, delay, inject } from "tsyringe";
import MatchService from "../../services/game-services/match.service";
import BaseController from "../base.controller";

@autoInjectable()
export default class MatchController extends BaseController {

    constructor(@inject(delay(() => MatchService)) public MatchService: MatchService) {
        super(MatchService)
    }
}