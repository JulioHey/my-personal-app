import { autoInjectable, delay, inject } from "tsyringe";
import {UserService} from "../../services/auth-services/user.service";
import BaseController from "../base.controller";

@autoInjectable()
export class UserController extends BaseController {

    constructor(@inject(delay(() => UserService)) public UserService: UserService) {
        super(UserService)
    }
}