import { autoInjectable, delay, inject } from "tsyringe";
import {RoleService} from "../../services/auth-services/role.service";
import BaseController from "../base.controller";

@autoInjectable()
export class RoleController extends BaseController {

    constructor(@inject(delay(() => RoleService)) public RoleService: RoleService) {
        super(RoleService)
    }
}