import { autoInjectable, delay, inject } from "tsyringe";
import { PermissionRoleService } from "../../services/auth-services/permission-role.service";
import BaseController from "../base.controller";

@autoInjectable()
export class PermissionRoleController extends BaseController {

    constructor(@inject(delay(() => PermissionRoleService)) public PermissionRoleService: PermissionRoleService) {
        super(PermissionRoleService)
    }
}