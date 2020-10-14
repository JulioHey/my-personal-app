import { autoInjectable, delay, inject } from "tsyringe";
import {CompetitionService} from "../../services/app-services/competition.service";
import BaseController from "../base.controller";

@autoInjectable()
export class CompetitionController extends BaseController {

    constructor(@inject(delay(() => CompetitionService)) public CompetitionService: CompetitionService) {
        super(CompetitionService)
    }
}