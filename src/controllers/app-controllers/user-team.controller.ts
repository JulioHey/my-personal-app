import { autoInjectable, delay, inject } from "tsyringe";
import {UserTeamService} from "../../services/app-services/user-team.service";
import BaseController from "../base.controller";

@autoInjectable()
export class UserTeamController extends BaseController {

    constructor(@inject(delay(() => UserTeamService)) public UserTeamService: UserTeamService) {
        super(UserTeamService)
    }
}