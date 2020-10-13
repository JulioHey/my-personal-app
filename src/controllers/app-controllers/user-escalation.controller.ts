import { autoInjectable, delay, inject } from "tsyringe";
import {UserEscalationService} from "../../services/app-services/user-escalation.service";
import BaseController from "../base.controller";

@autoInjectable()
export class UserEscalationController extends BaseController {

    constructor(@inject(delay(() => UserEscalationService)) public UserEscalationService: UserEscalationService) {
        super(UserEscalationService)
    }
}