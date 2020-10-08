import { autoInjectable, delay, inject } from "tsyringe";
import RoundService from "../../services/game-services/round.service";
import BaseController from "../base.controller";

@autoInjectable()
export default class RoundController extends BaseController {

    constructor(@inject(delay(() => RoundService)) public RoundService: RoundService) {
        super(RoundService)
    }

}