import { autoInjectable, container, injectable } from "tsyringe";
import {UserSI} from "../../interfaces/auth-interfaces/user.interface";

import { UserRepo } from "../../models/auth-models/user.model";
import BaseService from "../base.service";
import { RoleService } from "./role.service";


@injectable()
export class UserService extends BaseService<UserSI>{
    
    public role;
    constructor(modelI?: UserRepo){
        super(modelI)
        this.role = container.resolve(RoleService)
    }

    post = async (data) => {
        const {userName, userEmail, roles} = data;

        console.log(roles)
        const existRole = await this.role.model.repo.findByIds(roles);

        console.log(existRole)

        if (existRole) {
            const newUser = await this.model.repo.create({userName, userEmail, roles: existRole});
            await this.model.repo.save(newUser)
            return newUser
        } else {
            return {error: "A role is needed"}
        }
    }
}
