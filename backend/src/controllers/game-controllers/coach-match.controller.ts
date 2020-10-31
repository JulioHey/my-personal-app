import { autoInjectable, delay, inject } from "tsyringe";
import {CoachMatchService} from "../../services/game-services/coach-match.service";
import BaseController from "../base.controller";

@autoInjectable()
export class CoachMatchController extends BaseController {

    constructor(@inject(delay(() => CoachMatchService)) public CoachMatchService: CoachMatchService) {
        super(CoachMatchService)
    }
}