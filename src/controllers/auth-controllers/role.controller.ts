import { autoInjectable, delay, inject } from "tsyringe";
import {PermissionRoleService} from "../../services/auth-services/permission-role.service";
import {request, Request, response, Response} from 'express';
import BaseController from "../base.controller";

@autoInjectable()
export class RoleController extends BaseController {

    constructor(@inject(delay(() => PermissionRoleService)) public PermissionRoleService: PermissionRoleService) {
        super(PermissionRoleService)
    }

    create = async(request: Request, response: Response) => {
        try {
            const role = await this.PermissionRoleService.create(request.body)
            return response.json(role)
        } catch(error) {
            return response.json(error)
        }
    }
}