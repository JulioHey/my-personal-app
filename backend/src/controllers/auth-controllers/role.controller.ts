import { autoInjectable, delay, inject } from "tsyringe";
import {request, Request, response, Response} from 'express';
import BaseController from "../base.controller";
import { RoleService } from "../../services/auth-services/role.service";

@autoInjectable()
export class RoleController extends BaseController {

    constructor(@inject(delay(() => RoleService)) public RoleService: RoleService) {
        super(RoleService)
    }

}