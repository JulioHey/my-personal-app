import { autoInjectable, delay, inject } from "tsyringe";
import {CoachService} from "../../services/game-services/coach.service";
import BaseController from "../base.controller";

@autoInjectable()
export class CoachController extends BaseController {

    constructor(@inject(delay(() => CoachService)) public CoachService: CoachService) {
        super(CoachService)
    }
}