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
        const existRole = await this.role.model.repo.findByIds(roles);

        if (existRole[0]) {
            const newUser = await this.model.repo.create({userName, userEmail, roles: existRole});
            await this.model.repo.save(newUser);
    
            return newUser;
        } else {
            const newUser = await this.model.repo.create({userName, userEmail, roles: []});
            await this.model.repo.save(newUser);
    
            return newUser;
        }

    }
}
