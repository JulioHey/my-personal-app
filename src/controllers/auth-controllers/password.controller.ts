import { autoInjectable, delay, inject } from "tsyringe";
import {PasswordService} from "../../services/auth-services/password.service";
import BaseController from "../base.controller";

@autoInjectable()
export class PasswordController extends BaseController {

    constructor(@inject(delay(() => PasswordService)) public PasswordService: PasswordService) {
        super(PasswordService)
    }
}