import { autoInjectable, delay, inject } from "tsyringe";
import {UserCompetitionService} from "../../services/app-services/user-competition.service";
import BaseController from "../base.controller";

@autoInjectable()
export class UserCompetitionController extends BaseController {

    constructor(@inject(delay(() => UserCompetitionService)) public UserCompetitionService: UserCompetitionService) {
        super(UserCompetitionService)
    }
}