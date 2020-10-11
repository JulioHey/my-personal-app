import { autoInjectable, delay, inject } from "tsyringe";
import {PermissionService} from "../../services/auth-services/permission.service";
import BaseController from "../base.controller";

@autoInjectable()
export class PermissionController extends BaseController {

    constructor(@inject(delay(() => PermissionService)) public PermissionService: PermissionService) {
        super(PermissionService)
    }
}